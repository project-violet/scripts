// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 169:
case 1899:
case 3794:
case 3366:
case 816:
case 3771:
case 3069:
case 975:
case 3778:
case 1576:
case 2730:
case 129:
case 349:
case 3550:
case 1107:
case 1487:
case 2516:
case 1112:
case 233:
case 1308:
case 4020:
case 3287:
case 469:
case 910:
case 1301:
case 3160:
case 3687:
case 2226:
case 3746:
case 1559:
case 3452:
case 1548:
case 3984:
case 314:
case 741:
case 600:
case 443:
case 1932:
case 2266:
case 3120:
case 3483:
case 2989:
case 1652:
case 1169:
case 1283:
case 2533:
case 1961:
case 2181:
case 3890:
case 83:
case 363:
case 1734:
case 323:
case 1175:
case 2834:
case 705:
case 3355:
case 2408:
case 143:
case 1968:
case 647:
case 2134:
case 1875:
case 1781:
case 3504:
case 2775:
case 3962:
case 3586:
case 1788:
case 2202:
case 426:
case 1018:
case 3190:
case 882:
case 2217:
case 803:
case 2436:
case 2881:
case 1715:
case 3820:
case 4011:
case 2644:
case 3542:
case 3099:
case 3651:
case 1313:
case 967:
case 2071:
case 2769:
case 3649:
case 2815:
case 1451:
case 126:
case 3938:
case 2244:
case 1677:
case 3317:
case 3860:
case 151:
case 3724:
case 3673:
case 1829:
case 2707:
case 1473:
case 20:
case 1807:
case 3273:
case 2729:
case 4090:
case 565:
case 2696:
case 2413:
case 1605:
case 593:
case 451:
case 2872:
case 2567:
case 2914:
case 257:
case 2296:
case 422:
case 525:
case 1772:
case 3922:
case 1130:
case 3185:
case 220:
case 1575:
case 821:
case 2588:
case 2643:
case 2470:
case 3438:
case 1050:
case 3977:
case 1727:
case 861:
case 2243:
case 3365:
case 1949:
case 1231:
case 1958:
case 569:
case 2656:
case 2391:
case 2133:
case 2374:
case 2225:
case 2936:
case 3503:
case 3520:
case 1347:
case 697:
case 2256:
case 2515:
case 2197:
case 1662:
case 3076:
case 3379:
case 504:
case 1222:
case 3343:
case 894:
case 3905:
case 477:
case 2913:
case 1219:
case 870:
case 3745:
case 271:
case 1622:
case 950:
case 330:
case 3150:
case 208:
case 543:
case 3419:
case 177:
case 3298:
case 1973:
case 3700:
case 3723:
case 2279:
case 3674:
case 2867:
case 1498:
case 2310:
case 2572:
case 3356:
case 815:
case 3048:
case 3691:
case 783:
case 1491:
case 3274:
case 3940:
case 2280:
case 62:
case 3492:
case 2435:
case 411:
case 885:
case 1876:
case 2680:
case 2167:
case 66:
case 998:
case 673:
case 1004:
case 3621:
case 94:
case 4042:
case 399:
case 724:
case 3518:
case 1421:
case 3628:
case 111:
case 165:
case 1848:
case 3268:
case 1859:
case 3754:
case 1468:
case 2741:
case 3661:
case 1733:
case 979:
case 3142:
case 345:
case 3261:
case 1797:
case 551:
case 493:
case 378:
case 301:
case 2109:
case 465:
case 2489:
case 3186:
case 2045:
case 2695:
case 3104:
case 3484:
case 522:
case 1284:
case 1:
case 2360:
case 2802:
case 2543:
case 851:
case 2288:
case 1702:
case 313:
case 862:
case 538:
case 908:
case 2681:
case 324:
case 2464:
case 2215:
case 1152:
case 2777:
case 3620:
case 3603:
case 2844:
case 987:
case 2963:
case 1420:
case 1403:
case 1183:
case 1269:
case 2615:
case 1744:
case 1877:
case 1986:
case 4087:
case 1562:
case 3469:
case 1519:
case 3407:
case 2740:
case 1629:
case 1212:
case 745:
case 3388:
case 2155:
case 103:
case 182:
case 960:
case 2565:
case 1612:
case 272:
case 1607:
case 1229:
case 1460:
case 618:
case 482:
case 2320:
case 3083:
case 1805:
case 3713:
case 2945:
case 2672:
case 1364:
case 3052:
case 234:
case 701:
case 3315:
case 1630:
case 2471:
case 1699:
case 556:
case 306:
case 1299:
case 2580:
case 2993:
case 1230:
case 279:
case 3430:
case 1105:
case 1049:
case 43:
case 515:
case 3499:
case 570:
case 1755:
case 754:
case 4051:
case 1418:
case 843:
case 1140:
case 2826:
case 2036:
case 607:
case 1353:
case 1411:
case 3173:
case 13:
case 4058:
case 4049:
case 3211:
case 3976:
case 1726:
case 1177:
case 829:
case 3357:
case 1378:
case 4073:
case 2446:
case 917:
case 804:
case 869:
case 1394:
case 3568:
case 1371:
case 1852:
case 2783:
case 298:
case 2311:
case 1073:
case 24:
case 3690:
case 2453:
case 1584:
case 455:
case 3948:
case 2234:
case 3290:
case 3239:
case 521:
case 1439:
case 3532:
case 2634:
case 2318:
case 1780:
case 1276:
case 586:
case 159:
case 825:
case 3476:
case 2179:
case 3198:
case 1010:
case 544:
case 1354:
case 3191:
case 865:
case 1676:
case 2880:
case 3333:
case 658:
case 1892:
case 5:
case 2616:
case 639:
case 2493:
case 1122:
case 746:
case 2165:
case 2994:
case 2216:
case 2971:
case 1119:
case 2070:
case 2125:
case 2566:
case 1648:
case 1162:
case 2697:
case 2953:
case 1248:
case 275:
case 2047:
case 29:
case 1641:
case 3110:
case 519:
case 1552:
case 2156:
case 2706:
case 353:
case 1795:
case 2350:
case 210:
case 4074:
case 503:
case 3019:
case 1884:
case 933:
case 2895:
case 1131:
case 2014:
case 3832:
case 3022:
case 2738:
case 170:
case 2463:
case 3286:
case 2627:
case 2843:
case 3969:
case 2502:
case 1831:
case 456:
case 1106:
case 2517:
case 2195:
case 1404:
case 881:
case 512:
case 2609:
case 280:
case 53:
case 1838:
case 1743:
case 2856:
case 4021:
case 3975:
case 3168:
case 470:
case 3642:
case 2544:
case 3549:
case 1756:
case 3558:
case 957:
case 337:
case 3242:
case 4028:
case 1862:
case 1577:
case 2825:
case 2035:
case 1300:
case 115:
case 1323:
case 3128:
case 2304:
case 1765:
case 1819:
case 3327:
case 674:
case 1363:
case 2719:
case 121:
case 4068:
case 1032:
case 341:
case 2386:
case 2342:
case 1061:
case 452:
case 3929:
case 1779:
case 2667:
case 305:
case 61:
case 2423:
case 2180:
case 2400:
case 3898:
case 3907:
case 2879:
case 421:
case 4032:
case 1068:
case 2267:
case 1554:
case 638:
case 2483:
case 2120:
case 3266:
case 214:
case 139:
case 3597:
case 1164:
case 2452:
case 3666:
case 2746:
case 1072:
case 3024:
case 3834:
case 1601:
case 2355:
case 3408:
case 3188:
case 1853:
case 1208:
case 223:
case 1790:
case 2012:
case 3387:
case 158:
case 727:
case 1882:
case 2753:
case 27:
case 1201:
case 2326:
case 2029:
case 1608:
case 1871:
case 2778:
case 3064:
case 2069:
case 2771:
case 780:
case 1878:
case 2687:
case 3935:
case 1711:
case 3655:
case 4015:
case 1426:
case 2992:
case 1455:
case 1088:
case 2287:
case 518:
case 540:
case 2811:
case 685:
case 3255:
case 1979:
case 2273:
case 1034:
case 2111:
case 30:
case 3947:
case 242:
case 3053:
case 3707:
case 3712:
case 1545:
case 2302:
case 2724:
case 1496:
case 1178:
case 4034:
case 507:
case 937:
case 357:
case 3914:
case 3296:
case 2919:
case 1213:
case 136:
case 3696:
case 3351:
case 1171:
case 3413:
case 2190:
case 1563:
case 3202:
case 3881:
case 2139:
case 3217:
case 1417:
case 1182:
case 2586:
case 2504:
case 3602:
case 4057:
case 474:
case 1153:
case 3527:
case 11:
case 3134:
case 2251:
case 2938:
case 3970:
case 1864:
case 3769:
case 2658:
case 1444:
case 284:
case 2030:
case 2764:
case 41:
case 432:
case 3078:
case 2396:
case 905:
case 1057:
case 2931:
case 2249:
case 2150:
case 58:
case 2419:
case 831:
case 1137:
case 1465:
case 798:
case 1214:
case 686:
case 1193:
case 2560:
case 644:
case 1845:
case 3265:
case 3414:
case 2343:
case 2291:
case 1800:
case 3679:
case 964:
case 2041:
case 2698:
case 387:
case 1247:
case 2674:
case 2691:
case 2059:
case 2298:
case 3581:
case 1704:
case 2886:
case 3809:
case 2431:
case 2977:
case 3093:
case 3470:
case 1319:
case 2804:
case 1016:
case 2763:
case 118:
case 140:
case 779:
case 3827:
case 3037:
case 1786:
case 2379:
case 847:
case 2076:
case 254:
case 3515:
case 2520:
case 2503:
case 1154:
case 418:
case 2462:
case 3656:
case 1902:
case 2610:
case 4016:
case 1917:
case 1425:
case 3023:
case 2261:
case 245:
case 488:
case 612:
case 107:
case 3748:
case 3759:
case 1546:
case 3908:
case 3897:
case 536:
case 1067:
case 2268:
case 3534:
case 1689:
case 1495:
case 201:
case 3045:
case 2406:
case 2186:
case 734:
case 1582:
case 1966:
case 1163:
case 2983:
case 590:
case 1594:
case 1571:
case 4009:
case 1100:
case 3776:
case 750:
case 1009:
case 1145:
case 1893:
case 2395:
case 3332:
case 1750:
case 616:
case 2221:
case 3063:
case 1837:
case 902:
case 2621:
case 1384:
case 532:
case 51:
case 2850:
case 1514:
case 372:
case 3923:
case 1773:
case 2381:
case 1624:
case 832:
case 3001:
case 2429:
case 568:
case 81:
case 1375:
case 2873:
case 3008:
case 3155:
case 2412:
case 1224:
case 3740:
case 1967:
case 2407:
case 1547:
case 874:
case 2052:
case 2598:
case 497:
case 3579:
case 890:
case 2591:
case 291:
case 3320:
case 3303:
case 1488:
case 1108:
case 2736:
case 1307:
case 3817:
case 3543:
case 3802:
case 677:
case 1026:
case 1836:
case 3525:
case 1751:
case 2469:
case 3166:
case 836:
case 2203:
case 2849:
case 2858:
case 3963:
case 1415:
case 1927:
case 1264:
case 2620:
case 681:
case 2372:
case 992:
case 3556:
case 398:
case 46:
case 2568:
case 1646:
case 2561:
case 1096:
case 547:
case 708:
case 1330:
case 3752:
case 2158:
case 3385:
case 42:
case 3866:
case 16:
case 3634:
case 1801:
case 2532:
case 1136:
case 3102:
case 2941:
case 2948:
case 2959:
case 3234:
case 12:
case 2701:
case 34:
case 1434:
case 3311:
case 2639:
case 1808:
case 202:
case 1694:
case 3478:
case 945:
case 3257:
case 3993:
case 379:
case 720:
case 2077:
case 2285:
case 4017:
case 1113:
case 3937:
case 3494:
case 2528:
case 625:
case 2211:
case 2334:
case 88:
case 3390:
case 531:
case 1787:
case 2611:
case 1017:
case 2218:
case 693:
case 858:
case 2521:
case 1002:
case 3633:
case 2110:
case 1761:
case 3156:
case 3297:
case 2448:
case 1497:
case 2868:
case 1934:
case 3047:
case 3697:
case 2861:
case 2441:
case 1768:
case 3566:
case 629:
case 3784:
case 2022:
case 168:
case 1889:
case 3014:
case 669:
case 2019:
case 2316:
case 1170:
case 3706:
case 128:
case 2191:
case 2062:
case 2174:
case 1025:
case 3880:
case 1835:
case 1341:
case 1348:
case 1359:
case 914:
case 3792:
case 1147:
case 2397:
case 3070:
case 2828:
case 100:
case 2038:
case 3994:
case 2250:
case 1721:
case 3971:
case 3216:
case 97:
case 2930:
case 2031:
case 2821:
case 3616:
case 1043:
case 2650:
case 1957:
case 1095:
case 241:
case 3386:
case 2309:
case 2121:
case 3089:
case 3865:
case 2573:
case 666:
case 52:
case 447:
case 1791:
case 1774:
case 1600:
case 3879:
case 2907:
case 1467:
case 367:
case 3180:
case 3400:
case 1135:
case 205:
case 2747:
case 2891:
case 327:
case 3596:
case 1663:
case 2204:
case 3609:
case 3227:
case 4080:
case 380:
case 1409:
case 2969:
case 3843:
case 1263:
case 3517:
case 3195:
case 1536:
case 3209:
case 2286:
case 2242:
case 733:
case 2161:
case 2549:
case 2975:
case 3544:
case 2168:
case 3856:
case 2810:
case 3925:
case 3417:
case 921:
case 3402:
case 2788:
case 1202:
case 1217:
case 1436:
case 1527:
case 4078:
case 3153:
case 332:
case 31:
case 605:
case 1134:
case 2011:
case 3636:
case 2875:
case 872:
case 1617:
case 2781:
case 952:
case 1602:
case 1071:
case 3444:
case 2313:
case 1815:
case 2451:
case 226:
case 1094:
case 390:
case 2677:
case 3703:
case 266:
case 2715:
case 1644:
case 2277:
case 3146:
case 1947:
case 3034:
case 10:
case 1053:
case 637:
case 222:
case 2998:
case 994:
case 457:
case 3545:
case 2991:
case 2974:
case 970:
case 251:
case 1712:
case 2090:
case 262:
case 3377:
case 728:
case 157:
case 2205:
case 3523:
case 1296:
case 2772:
case 2199:
case 1046:
case 40:
case 1358:
case 2130:
case 3965:
case 1413:
case 768:
case 876:
case 3213:
case 336:
case 1872:
case 2928:
case 1799:
case 1172:
case 1730:
case 3785:
case 3352:
case 1064:
case 3015:
case 2830:
case 2003:
case 269:
case 3383:
case 985:
case 2899:
case 3878:
case 433:
case 1857:
case 653:
case 898:
case 2921:
case 1655:
case 1935:
case 4064:
case 2107:
case 2112:
case 3088:
case 2308:
case 3124:
case 4024:
case 2169:
case 1989:
case 2283:
case 1533:
case 3995:
case 2541:
case 2548:
case 959:
case 1115:
case 2252:
case 3208:
case 3739:
case 571:
case 508:
case 3601:
case 38:
case 1834:
case 3853:
case 1188:
case 1408:
case 1181:
case 3608:
case 3201:
case 2734:
case 1680:
case 3635:
case 2987:
case 916:
case 2692:
case 3955:
case 1776:
case 3926:
case 2599:
case 955:
case 89:
case 875:
case 117:
case 3480:
case 335:
case 3123:
case 1435:
case 3750:
case 1063:
case 3145:
case 3306:
case 2086:
case 2421:
case 3893:
case 211:
case 1816:
case 2428:
case 1759:
case 225:
case 1901:
case 3392:
case 2335:
case 1023:
case 3854:
case 307:
case 2797:
case 3067:
case 265:
case 989:
case 293:
case 797:
case 1328:
case 388:
case 3689:
case 2606:
case 4000:
case 4023:
case 35:
case 2206:
case 2432:
case 3495:
case 1489:
case 3582:
case 2684:
case 1045:
case 3443:
case 1809:
case 2727:
case 3670:
case 1093:
case 1581:
case 1243:
case 3704:
case 2958:
case 2231:
case 2949:
case 2575:
case 2951:
case 3944:
case 1827:
case 2709:
case 1643:
case 3319:
case 340:
case 2347:
case 1197:
case 1515:
case 2662:
case 919:
case 4093:
case 1398:
case 1625:
case 2410:
case 2569:
case 3154:
case 3917:
case 3425:
case 1936:
case 4037:
case 3137:
case 1665:
case 2219:
case 4054:
case 3338:
case 487:
case 108:
case 3614:
case 2512:
case 3193:
case 281:
case 2222:
case 1414:
case 3845:
case 609:
case 880:
case 1265:
case 3214:
case 624:
case 2529:
case 3800:
case 3823:
case 1679:
case 613:
case 187:
case 3362:
case 408:
case 471:
case 72:
case 2767:
case 3647:
case 277:
case 986:
case 2973:
case 773:
case 944:
case 1572:
case 1310:
case 2176:
case 3479:
case 76:
case 2299:
case 925:
case 2230:
case 2485:
case 2105:
case 740:
case 2346:
case 718:
case 2058:
case 2049:
case 1257:
case 2592:
case 3044:
case 4036:
case 289:
case 1937:
case 3678:
case 1494:
case 2950:
case 3271:
case 3916:
case 1855:
case 645:
case 580:
case 23:
case 2726:
case 479:
case 3002:
case 2382:
case 1036:
case 3787:
case 1826:
case 2394:
case 2766:
case 1144:
case 1783:
case 1866:
case 2177:
case 699:
case 527:
case 2378:
case 3330:
case 1752:
case 44:
case 1954:
case 2506:
case 373:
case 1117:
case 833:
case 3801:
case 4013:
case 911:
case 1634:
case 2490:
case 1318:
case 3282:
case 3434:
case 2584:
case 1234:
case 3307:
case 2275:
case 150:
case 1288:
case 3570:
case 3312:
case 2702:
case 2324:
case 2:
case 3329:
case 981:
case 3101:
case 3026:
case 3836:
case 2675:
case 1360:
case 1802:
case 2531:
case 2403:
case 2420:
case 1963:
case 2269:
case 630:
case 1525:
case 2877:
case 3664:
case 2744:
case 1166:
case 3909:
case 2562:
case 2986:
case 450:
case 857:
case 286:
case 1464:
case 3758:
case 2152:
case 2669:
case 1844:
case 3264:
case 3415:
case 3927:
case 244:
case 2522:
case 1126:
case 172:
case 3514:
case 1923:
case 1900:
case 3967:
case 3224:
case 1740:
case 2207:
case 548:
case 2629:
case 510:
case 3375:
case 1155:
case 282:
case 203:
case 1705:
case 2796:
case 1272:
case 3547:
case 219:
case 4008:
case 1320:
case 1303:
case 2805:
case 788:
case 3066:
case 75:
case 1945:
case 3369:
case 1672:
case 2404:
case 1964:
case 4035:
case 1609:
case 1227:
case 2838:
case 294:
case 3663:
case 922:
case 270:
case 3536:
case 1738:
case 1463:
case 2903:
case 1209:
case 1843:
case 808:
case 3263:
case 3409:
case 2106:
case 3189:
case 2345:
case 579:
case 480:
case 2862:
case 2577:
case 1035:
case 3080:
case 1825:
case 215:
case 1856:
case 256:
case 1762:
case 1544:
case 820:
case 646:
case 2032:
case 684:
case 739:
case 3814:
case 1445:
case 1386:
case 54:
case 261:
case 1722:
case 1304:
case 3645:
case 2765:
case 427:
case 926:
case 3600:
case 3791:
case 598:
case 3774:
case 3847:
case 1924:
case 966:
case 2779:
case 1667:
case 1400:
case 347:
case 71:
case 2354:
case 576:
case 2892:
case 623:
case 2780:
case 2911:
case 1792:
case 550:
case 1994:
case 3416:
case 943:
case 300:
case 238:
case 1616:
case 3957:
case 1493:
case 614:
case 1526:
case 1978:
case 3293:
case 790:
case 1953:
case 2248:
case 2259:
case 3497:
case 175:
case 19:
case 2098:
case 3376:
case 817:
case 1633:
case 1297:
case 1156:
case 285:
case 1454:
case 2162:
case 3768:
case 410:
case 2091:
case 1982:
case 2648:
case 3254:
case 2583:
case 2990:
case 1697:
case 2939:
case 368:
case 2806:
case 1014:
case 2131:
case 1143:
case 4047:
case 475:
case 1946:
case 3501:
case 3508:
case 2337:
case 328:
case 148:
case 110:
case 2884:
case 501:
case 3829:
case 931:
case 362:
case 3090:
case 1302:
case 1724:
case 578:
case 3974:
case 3807:
case 1273:
case 2760:
case 1111:
case 2034:
case 3473:
case 1919:
case 2213:
case 2194:
case 2171:
case 442:
case 545:
case 2496:
case 3199:
case 680:
case 3772:
case 2178:
case 3130:
case 2965:
case 3205:
case 2377:
case 2523:
case 3910:
case 3781:
case 1504:
case 599:
case 232:
case 2153:
case 3011:
case 21:
case 2563:
case 1190:
case 3018:
case 667:
case 2340:
case 2236:
case 759:
case 3788:
case 2182:
case 2305:
case 1542:
case 738:
case 2146:
case 3277:
case 947:
case 1803:
case 1030:
case 1396:
case 1099:
case 1651:
case 366:
case 274:
case 2057:
case 3715:
case 1249:
case 1477:
case 1938:
case 1251:
case 146:
case 290:
case 1649:
case 463:
case 239:
case 2164:
case 495:
case 1746:
case 3548:
case 721:
case 806:
case 2554:
case 3283:
case 4007:
case 3652:
case 3541:
case 752:
case 4012:
case 1120:
case 1103:
case 17:
case 3060:
case 3734:
case 195:
case 3961:
case 414:
case 163:
case 530:
case 3175:
case 2601:
case 343:
case 2208:
case 1012:
case 2790:
case 1007:
case 258:
case 1069:
case 3921:
case 4075:
case 3830:
case 3003:
case 648:
case 610:
case 149:
case 2894:
case 3757:
case 3576:
case 3928:
case 554:
case 715:
case 2537:
case 2088:
case 1287:
case 1811:
case 928:
case 3107:
case 4069:
case 1550:
case 2718:
case 3112:
case 1687:
case 69:
case 2593:
case 2711:
case 1818:
case 756:
case 2426:
case 2081:
case 3129:
case 968:
case 449:
case 883:
case 3301:
case 393:
case 3733:
case 1661:
case 2067:
case 3848:
case 1268:
case 401:
case 1380:
case 3335:
case 3841:
case 207:
case 2854:
case 1142:
case 2392:
case 325:
case 3461:
case 1232:
case 2966:
case 2582:
case 1186:
case 1406:
case 1590:
case 2163:
case 3206:
case 3432:
case 3284:
case 679:
case 1632:
case 25:
case 288:
case 1484:
case 1952:
case 542:
case 3292:
case 2123:
case 235:
case 3599:
case 2235:
case 1585:
case 3530:
case 3042:
case 546:
case 3692:
case 584:
case 3876:
case 1511:
case 2027:
case 199:
case 2384:
case 2009:
case 1737:
case 3086:
case 311:
case 2893:
case 2750:
case 698:
case 853:
case 973:
case 786:
case 1518:
case 716:
case 1905:
case 2465:
case 2996:
case 3529:
case 57:
case 3222:
case 4059:
case 1560:
case 381:
case 2845:
case 1343:
case 563:
case 3507:
case 2338:
case 3512:
case 3370:
case 1745:
case 3219:
case 2137:
case 3622:
case 2524:
case 3176:
case 837:
case 514:
case 2247:
case 1691:
case 1048:
case 1356:
case 2097:
case 1723:
case 3973:
case 1291:
case 1940:
case 650:
case 3767:
case 1698:
case 1041:
case 3474:
case 430:
case 2362:
case 2319:
case 1763:
case 240:
case 218:
case 1438:
case 3238:
case 3709:
case 2270:
case 2322:
case 1365:
case 2704:
case 1431:
case 1886:
case 4076:
case 1977:
case 1503:
case 1842:
case 496:
case 1462:
case 1610:
case 3141:
case 2425:
case 712:
case 2564:
case 805:
case 2742:
case 3159:
case 2456:
case 3662:
case 1076:
case 2096:
case 3378:
case 1561:
case 483:
case 402:
case 505:
case 935:
case 1005:
case 1158:
case 1149:
case 2246:
case 3852:
case 316:
case 3394:
case 4040:
case 3371:
case 2646:
case 1568:
case 2682:
case 2253:
case 2434:
case 4005:
case 102:
case 617:
case 2997:
case 1690:
case 541:
case 2136:
case 3439:
case 2801:
case 2653:
case 3490:
case 3506:
case 1708:
case 1290:
case 1941:
case 777:
case 389:
case 2113:
case 3630:
case 3699:
case 1499:
case 3299:
case 1077:
case 3230:
case 2787:
case 823:
case 3382:
case 3755:
case 1218:
case 406:
case 1521:
case 1211:
case 95:
case 4077:
case 895:
case 1618:
case 33:
case 1173:
case 988:
case 4083:
case 2375:
case 940:
case 382:
case 3519:
case 1412:
case 2224:
case 1187:
case 3229:
case 4052:
case 1260:
case 2624:
case 1381:
case 3840:
case 765:
case 2369:
case 846:
case 1591:
case 191:
case 620:
case 660:
case 319:
case 3364:
case 3796:
case 1598:
case 2472:
case 424:
case 3531:
case 3:
case 3942:
case 409:
case 2026:
case 842:
case 2329:
case 2055:
case 2108:
case 2488:
case 3324:
case 3717:
case 2570:
case 711:
case 2415:
case 1620:
case 1603:
case 2749:
case 2758:
case 3152:
case 3669:
case 671:
case 1469:
case 3744:
case 1220:
case 3269:
case 1849:
case 3403:
case 1327:
case 1573:
case 1128:
case 1084:
case 2645:
case 932:
case 141:
case 1309:
case 2814:
case 2245:
case 3363:
case 3822:
case 3032:
case 3540:
case 321:
case 2135:
case 4084:
case 743:
case 1891:
case 854:
case 3505:
case 3779:
case 3061:
case 974:
case 1929:
case 2798:
case 2791:
case 2513:
case 3068:
case 2774:
case 2600:
case 1907:
case 1912:
case 441:
case 3831:
case 1969:
case 3106:
case 2409:
case 2189:
case 2263:
case 704:
case 1604:
case 231:
case 729:
case 370:
case 2536:
case 1770:
case 394:
case 2427:
case 4092:
case 3743:
case 2663:
case 2870:
case 769:
case 1551:
case 506:
case 1975:
case 936:
case 3725:
case 1642:
case 2988:
case 1810:
case 1367:
case 137:
case 3300:
case 315:
case 2981:
case 1161:
case 3756:
case 1549:
case 3442:
case 2254:
case 3241:
case 453:
case 3939:
case 4019:
case 385:
case 3091:
case 3648:
case 2376:
case 1110:
case 3641:
case 3552:
case 1448:
case 2654:
case 4022:
case 1868:
case 751:
case 3138:
case 3884:
case 1316:
case 1789:
case 2508:
case 3795:
case 2501:
case 1832:
case 1022:
case 3393:
case 268:
case 3131:
case 2359:
case 2056:
case 509:
case 3010:
case 1198:
case 2147:
case 3918:
case 3354:
case 1174:
case 2341:
case 2728:
case 1999:
case 2114:
case 2043:
case 726:
case 2237:
case 2416:
case 3450:
case 1038:
case 1587:
case 4062:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758524401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,];
var gg_b = "1758524401/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
