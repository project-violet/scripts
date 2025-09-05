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
case 3185:
case 1137:
case 2973:
case 1076:
case 467:
case 1377:
case 445:
case 1741:
case 141:
case 3247:
case 2345:
case 3493:
case 799:
case 87:
case 1848:
case 1759:
case 3438:
case 1001:
case 3774:
case 1526:
case 494:
case 3080:
case 1782:
case 836:
case 187:
case 1101:
case 2286:
case 1037:
case 5:
case 3403:
case 790:
case 248:
case 1176:
case 1875:
case 1971:
case 2500:
case 3944:
case 952:
case 292:
case 917:
case 2505:
case 2743:
case 733:
case 1870:
case 1682:
case 2485:
case 3165:
case 717:
case 2003:
case 3511:
case 308:
case 1479:
case 907:
case 3674:
case 4033:
case 86:
case 3454:
case 1823:
case 2590:
case 2266:
case 3269:
case 1727:
case 3065:
case 1641:
case 707:
case 246:
case 3221:
case 1410:
case 3534:
case 1996:
case 2595:
case 523:
case 477:
case 2038:
case 921:
case 1415:
case 3324:
case 35:
case 1762:
case 3060:
case 474:
case 1982:
case 237:
case 400:
case 3892:
case 3839:
case 2836:
case 2417:
case 3644:
case 770:
case 2720:
case 904:
case 1531:
case 970:
case 704:
case 1597:
case 1671:
case 1451:
case 1840:
case 44:
case 914:
case 714:
case 2494:
case 1941:
case 875:
case 203:
case 779:
case 979:
case 4095:
case 3068:
case 969:
case 2323:
case 3094:
case 847:
case 1927:
case 769:
case 1146:
case 865:
case 4090:
case 1389:
case 2453:
case 1962:
case 3277:
case 1352:
case 960:
case 3004:
case 2620:
case 2135:
case 881:
case 1706:
case 2943:
case 3168:
case 3316:
case 3017:
case 2625:
case 1422:
case 46:
case 3519:
case 1915:
case 373:
case 3308:
case 1811:
case 2857:
case 2694:
case 3213:
case 3570:
case 1687:
case 3635:
case 1910:
case 438:
case 2985:
case 18:
case 3020:
case 2881:
case 3173:
case 1406:
case 1834:
case 2617:
case 242:
case 1651:
case 671:
case 1471:
case 2355:
case 2813:
case 2420:
case 3903:
case 1858:
case 1749:
case 1132:
case 2688:
case 71:
case 1200:
case 1622:
case 2044:
case 3242:
case 444:
case 302:
case 853:
case 1295:
case 3938:
case 1883:
case 90:
case 3735:
case 867:
case 191:
case 2960:
case 2768:
case 357:
case 495:
case 2965:
case 2829:
case 3384:
case 3730:
case 23:
case 2524:
case 3395:
case 2443:
case 185:
case 2780:
case 1284:
case 2334:
case 2174:
case 3390:
case 1462:
case 2665:
case 1357:
case 1918:
case 2074:
case 161:
case 2660:
case 3012:
case 2214:
case 3638:
case 3754:
case 1459:
case 905:
case 3738:
case 1233:
case 330:
case 3474:
case 1539:
case 1987:
case 1441:
case 3793:
case 1298:
case 2760:
case 1264:
case 582:
case 475:
case 620:
case 2765:
case 2412:
case 1615:
case 3930:
case 3807:
case 3043:
case 339:
case 1951:
case 1313:
case 874:
case 800:
case 1208:
case 3703:
case 3545:
case 278:
case 1850:
case 1482:
case 1568:
case 1616:
case 2414:
case 2766:
case 3769:
case 427:
case 573:
case 1262:
case 2587:
case 3936:
case 1504:
case 2902:
case 3977:
case 1484:
case 3689:
case 2551:
case 1856:
case 2243:
case 411:
case 2549:
case 3546:
case 2431:
case 1517:
case 2332:
case 2567:
case 649:
case 2172:
case 502:
case 1408:
case 2522:
case 889:
case 2786:
case 1150:
case 1588:
case 3396:
case 3097:
case 961:
case 2212:
case 640:
case 4015:
case 1050:
case 761:
case 1498:
case 1464:
case 3621:
case 1716:
case 880:
case 1241:
case 1433:
case 3274:
case 2072:
case 82:
case 2309:
case 1055:
case 512:
case 3843:
case 1259:
case 2702:
case 3777:
case 2181:
case 4049:
case 1624:
case 3244:
case 2426:
case 140:
case 1206:
case 2356:
case 1011:
case 3341:
case 2157:
case 3921:
case 3382:
case 1111:
case 2966:
case 1565:
case 791:
case 149:
case 1296:
case 251:
case 2081:
case 3820:
case 2142:
case 2739:
case 3736:
case 156:
case 2639:
case 3636:
case 382:
case 2844:
case 4018:
case 1183:
case 3947:
case 2129:
case 2013:
case 929:
case 1495:
case 1832:
case 1158:
case 3442:
case 605:
case 424:
case 3026:
case 2113:
case 1400:
case 2220:
case 720:
case 98:
case 3537:
case 539:
case 78:
case 1083:
case 3591:
case 3457:
case 1899:
case 920:
case 1405:
case 2602:
case 1933:
case 2391:
case 1964:
case 984:
case 3039:
case 1287:
case 1140:
case 2337:
case 480:
case 2268:
case 3092:
case 1790:
case 169:
case 3613:
case 690:
case 3:
case 4071:
case 2301:
case 3192:
case 1705:
case 1543:
case 283:
case 1424:
case 1249:
case 3853:
case 489:
case 3002:
case 2204:
case 1700:
case 4006:
case 2376:
case 160:
case 3310:
case 3139:
case 1040:
case 1178:
case 331:
case 2288:
case 1984:
case 3761:
case 811:
case 621:
case 2439:
case 1218:
case 179:
case 3972:
case 2559:
case 1690:
case 55:
case 1512:
case 2914:
case 617:
case 114:
case 1695:
case 633:
case 824:
case 3957:
case 2506:
case 1905:
case 1048:
case 3203:
case 133:
case 2169:
case 2486:
case 3489:
case 1900:
case 2697:
case 1876:
case 386:
case 3942:
case 679:
case 2631:
case 1733:
case 2596:
case 3447:
case 3293:
case 2260:
case 1764:
case 3885:
case 604:
case 2607:
case 1990:
case 3672:
case 1148:
case 3880:
case 2021:
case 4062:
case 3066:
case 3367:
case 2047:
case 388:
case 660:
case 1019:
case 199:
case 3351:
case 3913:
case 3772:
case 543:
case 1573:
case 3421:
case 1698:
case 3469:
case 1633:
case 1279:
case 4082:
case 1520:
case 3860:
case 2731:
case 2838:
case 2152:
case 1175:
case 2797:
case 3961:
case 1330:
case 1525:
case 2926:
case 1170:
case 1023:
case 987:
case 173:
case 3915:
case 505:
case 329:
case 3496:
case 1635:
case 2432:
case 1120:
case 639:
case 982:
case 2800:
case 782:
case 1954:
case 2976:
case 38:
case 1398:
case 1173:
case 2589:
case 2991:
case 2283:
case 320:
case 2895:
case 2409:
case 1261:
case 3834:
case 3767:
case 1229:
case 630:
case 515:
case 1523:
case 2890:
case 3863:
case 3651:
case 3372:
case 289:
case 3009:
case 3858:
case 2071:
case 2314:
case 102:
case 483:
case 2171:
case 1938:
case 2397:
case 3295:
case 3099:
case 2331:
case 112:
case 22:
case 391:
case 1281:
case 1735:
case 3290:
case 2263:
case 157:
case 2106:
case 3618:
case 2234:
case 1730:
case 1826:
case 163:
case 4036:
case 3566:
case 2569:
case 2864:
case 3922:
case 2898:
case 540:
case 154:
case 2791:
case 663:
case 2833:
case 3284:
case 3967:
case 1603:
case 2159:
case 3156:
case 193:
case 426:
case 2182:
case 3715:
case 549:
case 2701:
case 1128:
case 3056:
case 1305:
case 3357:
case 2255:
case 3710:
case 1012:
case 4047:
case 1578:
case 3427:
case 3342:
case 361:
case 1300:
case 2250:
case 1754:
case 225:
case 1738:
case 130:
case 3233:
case 3459:
case 2456:
case 1831:
case 2062:
case 3264:
case 1793:
case 3298:
case 2536:
case 3539:
case 3441:
case 556:
case 3329:
case 2027:
case 139:
case 1807:
case 3949:
case 3208:
case 2691:
case 673:
case 1814:
case 1540:
case 569:
case 2010:
case 106:
case 3137:
case 3662:
case 1185:
case 2302:
case 2275:
case 3076:
case 1493:
case 3627:
case 988:
case 3216:
case 2270:
case 1774:
case 788:
case 3759:
case 3782:
case 2115:
case 3526:
case 1866:
case 655:
case 2392:
case 2223:
case 116:
case 3037:
case 3336:
case 1085:
case 1583:
case 786:
case 3875:
case 211:
case 2542:
case 2557:
case 2909:
case 3906:
case 1165:
case 2437:
case 570:
case 3682:
case 3819:
case 2656:
case 3659:
case 227:
case 1454:
case 3479:
case 2932:
case 1534:
case 3410:
case 3641:
case 1221:
case 1065:
case 2401:
case 2999:
case 1060:
case 1324:
case 15:
case 579:
case 3321:
case 2067:
case 2366:
case 3369:
case 1892:
case 3606:
case 2609:
case 2446:
case 3449:
case 4061:
case 1644:
case 3224:
case 4029:
case 517:
case 1088:
case 3451:
case 828:
case 3671:
case 618:
case 1430:
case 1188:
case 4013:
case 2699:
case 608:
case 3845:
case 2632:
case 2167:
case 1435:
case 3487:
case 3941:
case 923:
case 1974:
case 723:
case 521:
case 1094:
case 1068:
case 2151:
case 616:
case 826:
case 3146:
case 4081:
case 3927:
case 1104:
case 3418:
case 2824:
case 3389:
case 2386:
case 2087:
case 1236:
case 3771:
case 1004:
case 1277:
case 3878:
case 3467:
case 2187:
case 1744:
case 2240:
case 1194:
case 2709:
case 9:
case 2049:
case 3046:
case 422:
case 7:
case 2245:
case 590:
case 1316:
case 955:
case 3795:
case 1102:
case 295:
case 1888:
case 743:
case 3933:
case 3140:
case 3964:
case 1781:
case 1092:
case 2763:
case 2478:
case 3145:
case 2380:
case 848:
case 3705:
case 1757:
case 1:
case 3251:
case 2818:
case 1661:
case 1315:
case 4044:
case 3249:
case 2246:
case 2711:
case 3424:
case 3908:
case 3045:
case 2683:
case 360:
case 3700:
case 587:
case 1742:
case 498:
case 236:
case 2887:
case 1642:
case 3393:
case 3178:
case 131:
case 2445:
case 2783:
case 2365:
case 3267:
case 1729:
case 1761:
case 892:
case 1894:
case 2634:
case 1436:
case 238:
case 2758:
case 3690:
case 686:
case 2955:
case 2663:
case 2574:
case 3218:
case 1713:
case 314:
case 26:
case 1681:
case 2124:
case 3078:
case 3695:
case 1804:
case 3048:
case 1957:
case 862:
case 3801:
case 1318:
case 317:
case 908:
case 2815:
case 3684:
case 1166:
case 333:
case 813:
case 2423:
case 1942:
case 478:
case 3995:
case 1599:
case 2650:
case 2388:
case 275:
case 75:
case 3416:
case 2419:
case 1447:
case 321:
case 29:
case 3798:
case 1293:
case 1672:
case 2475:
case 3148:
case 2655:
case 1452:
case 2963:
case 307:
case 918:
case 1367:
case 466:
case 2317:
case 3019:
case 2958:
case 1349:
case 2755:
case 2201:
case 1772:
case 1351:
case 1913:
case 1186:
case 3698:
case 1469:
case 906:
case 3210:
case 3573:
case 265:
case 3075:
case 3279:
case 2276:
case 3633:
case 4074:
case 1254:
case 706:
case 3335:
case 468:
case 916:
case 1387:
case 281:
case 3175:
case 2983:
case 1865:
case 3525:
case 2116:
case 3330:
case 1961:
case 872:
case 2394:
case 3170:
case 3023:
case 2670:
case 1828:
case 277:
case 4038:
case 2450:
case 434:
case 2325:
case 3227:
case 1647:
case 2108:
case 930:
case 1652:
case 2455:
case 2675:
case 1472:
case 305:
case 2033:
case 2535:
case 2064:
case 1977:
case 2940:
case 1812:
case 2198:
case 2623:
case 3856:
case 2859:
case 682:
case 939:
case 835:
case 492:
case 2945:
case 2008:
case 3282:
case 2084:
case 2648:
case 1789:
case 1114:
case 3408:
case 3924:
case 1097:
case 3588:
case 3150:
case 1014:
case 1131:
case 2978:
case 2775:
case 1752:
case 3241:
case 993:
case 3553:
case 1669:
case 1747:
case 2256:
case 3259:
case 1843:
case 1007:
case 1274:
case 3433:
case 2195:
case 902:
case 3624:
case 1244:
case 1461:
case 264:
case 2312:
case 1873:
case 2005:
case 3206:
case 2209:
case 2190:
case 3163:
case 3134:
case 2503:
case 2105:
case 957:
case 763:
case 2328:
case 2090:
case 561:
case 297:
case 3063:
case 3565:
case 757:
case 1921:
case 963:
case 3296:
case 712:
case 2678:
case 3560:
case 1820:
case 30:
case 182:
case 2434:
case 356:
case 1636:
case 2975:
case 3490:
case 1952:
case 210:
case 2463:
case 2554:
case 1126:
case 3058:
case 1947:
case 2343:
case 3809:
case 1501:
case 866:
case 773:
case 1327:
case 3832:
case 219:
case 1537:
case 3585:
case 1362:
case 2640:
case 878:
case 2896:
case 3899:
case 145:
case 3072:
case 3518:
case 167:
case 3309:
case 2669:
case 1184:
case 2621:
case 2371:
case 2014:
case 3212:
case 441:
case 487:
case 598:
case 3522:
case 697:
case 2789:
case 3786:
case 3172:
case 2107:
case 1827:
case 3549:
case 2546:
case 1008:
case 610:
case 1841:
case 1623:
case 1859:
case 88:
case 1164:
case 1940:
case 2977:
case 1320:
case 1098:
case 1535:
case 619:
case 3587:
case 829:
case 2936:
case 3939:
case 1675:
case 1033:
case 925:
case 3407:
case 2652:
case 1455:
case 3414:
case 1530:
case 2721:
case 1108:
case 1619:
case 1325:
case 2647:
case 2828:
case 1450:
case 177:
case 2591:
case 1896:
case 174:
case 677:
case 3113:
case 2026:
case 2442:
case 2327:
case 2501:
case 566:
case 3692:
case 1343:
case 871:
case 14:
case 2947:
case 2481:
case 3515:
case 2126:
case 3129:
case 1919:
case 1871:
case 1463:
case 2952:
case 110:
case 1554:
case 1975:
case 3579:
case 2576:
case 282:
case 1778:
case 3639:
case 3844:
case 1458:
case 351:
case 1678:
case 2736:
case 1100:
case 2413:
case 980:
case 1232:
case 2921:
case 2825:
case 861:
case 694:
case 576:
case 3157:
case 885:
case 1190:
case 1948:
case 53:
case 2359:
case 3057:
case 632:
case 1209:
case 164:
case 667:
case 2461:
case 322:
case 3181:
case 3426:
case 1740:
case 645:
case 1000:
case 653:
case 2804:
case 1124:
case 16:
case 2972:
case 1574:
case 534:
case 3559:
case 1955:
case 1758:
case 3253:
case 1849:
case 3439:
case 3541:
case 2894:
case 3402:
case 420:
case 69:
case 2761:
case 2729:
case 1611:
case 675:
case 1440:
case 724:
case 3997:
case 1360:
case 3931:
case 2642:
case 1445:
case 1024:
case 136:
case 2002:
case 3077:
case 2379:
case 3376:
case 1711:
case 550:
case 2661:
case 144:
case 647:
case 3301:
case 2:
case 1818:
case 1734:
case 491:
case 1380:
case 1478:
case 1658:
case 1867:
case 2092:
case 3294:
case 1763:
case 1822:
case 17:
case 2235:
case 3337:
case 559:
case 3036:
case 2888:
case 3391:
case 2102:
case 3177:
case 1394:
case 485:
case 1368:
case 67:
case 3280:
case 3147:
case 3926:
case 2865:
case 695:
case 3838:
case 3731:
case 181:
case 2086:
case 1237:
case 644:
case 2254:
case 3052:
case 165:
case 4056:
case 1276:
case 3714:
case 2186:
case 2772:
case 1201:
case 2351:
case 2913:
case 3707:
case 636:
case 1755:
case 288:
case 3346:
case 1934:
case 727:
case 471:
case 3021:
case 2880:
case 2367:
case 3265:
case 2066:
case 3607:
case 1963:
case 2981:
case 2447:
case 3614:
case 2238:
case 701:
case 3596:
case 1650:
case 1810:
case 537:
case 1423:
case 711:
case 513:
case 1879:
case 3486:
case 1815:
case 66:
case 2318:
case 3506:
case 2509:
case 334:
case 3612:
case 99:
case 775:
case 2324:
case 1581:
case 3093:
case 25:
case 1999:
case 79:
case 2269:
case 3266:
case 2534:
case 218:
case 346:
case 2563:
case 127:
case 870:
case 1816:
case 3485:
case 3003:
case 3847:
case 3505:
case 3628:
case 1909:
case 1557:
case 804:
case 1491:
case 2944:
case 1542:
case 111:
case 3480:
case 3500:
case 3852:
case 3138:
case 583:
case 1179:
case 781:
case 350:
case 3286:
case 981:
case 2085:
case 1110:
case 348:
case 2403:
case 3920:
case 3643:
case 3728:
case 1223:
case 1115:
case 2866:
case 1561:
case 860:
case 1513:
case 2438:
case 359:
case 1015:
case 1219:
case 3460:
case 947:
case 1302:
case 965:
case 2252:
case 2185:
case 3340:
case 3712:
case 3973:
case 206:
case 869:
case 2017:
case 890:
case 2316:
case 3130:
case 3508:
case 3625:
case 3943:
case 2194:
case 3370:
case 2168:
case 1051:
case 2744:
case 1240:
case 372:
case 3375:
case 1386:
case 3035:
case 1087:
case 3239:
case 4034:
case 795:
case 3453:
case 1824:
case 3598:
case 77:
case 1732:
case 1149:
case 40:
case 2094:
case 2068:
case 611:
case 2974:
case 738:
case 2435:
case 456:
case 3494:
case 3468:
case 807:
case 2430:
case 1122:
case 1278:
case 96:
case 362:
case 627:
case 817:
case 1446:
case 1022:
case 852:
case 4083:
case 3928:
case 2892:
case 1118:
case 337:
case 1067:
case 3584:
case 313:
case 3653:
case 263:
case 1569:
case 2730:
case 3861:
case 2384:
case 1106:
case 997:
case 3768:
case 3144:
case 3960:
case 2993:
case 1397:
case 1171:
case 964:
case 2242:
case 1314:
case 202:
case 3717:
case 1746:
case 3420:
case 2903:
case 1307:
case 2548:
case 3355:
case 460:
case 2257:
case 1006:
case 470:
case 2229:
case 3226:
case 815:
case 1646:
case 625:
case 342:
case 3980:
case 1895:
case 774:
case 3604:
case 1409:
case 900:
case 3788:
case 1991:
case 1283:
case 1937:
case 3985:
case 2020:
case 700:
case 2173:
case 2575:
case 1800:
case 2954:
case 479:
case 1432:
case 2120:
case 710:
case 2073:
case 3694:
case 1499:
case 909:
case 3857:
case 3668:
case 74:
case 414:
case 94:
case 2125:
case 2519:
case 3753:
case 2540:
case 1162:
case 1637:
case 433:
case 417:
case 3680:
case 3358:
case 2545:
case 2043:
case 3872:
case 239:
case 3765:
case 1027:
case 3412:
case 777:
case 3994:
case 2935:
case 1536:
case 3760:
case 2831:
case 1456:
case 2897:
case 2654:
case 3383:
case 125:
case 1776:
case 2300:
case 4070:
case 2754:
case 2693:
case 3214:
case 2578:
case 4075:
case 945:
case 1255:
case 3074:
case 1701:
case 753:
case 967:
case 953:
case 767:
case 1041:
case 3953:
case 3311:
case 1182:
case 1159:
case 62:
case 2028:
case 2390:
case 490:
case 3363:
case 368:
case 1141:
case 3780:
case 2395:
case 858:
case 3297:
case 3443:
case 1833:
case 254:
case 1737:
case 840:
case 1864:
case 3231:
case 33:
case 628:
case 818:
case 3950:
case 2695:
case 214:
case 527:
case 473:
case 3955:
case 3663:
case 1559:
case 501:
case 3851:
case 3574:
case 903:
case 1439:
case 1541:
case 3634:
case 2303:
case 338:
case 2846:
case 1253:
case 937:
case 2528:
case 2605:
case 913:
case 1726:
case 4020:
case 1830:
case 2600:
case 1997:
case 762:
case 4025:
case 3887:
case 204:
case 3445:
case 1931:
case 3360:
case 2040:
case 1136:
case 336:
case 1376:
case 2354:
case 2700:
case 772:
case 1217:
case 2424:
case 402:
case 1626:
case 626:
case 2543:
case 2705:
case 1527:
case 3867:
case 412:
case 3734:
case 269:
case 806:
case 2790:
case 3385:
case 2140:
case 1036:
case 2287:
case 463:
case 37:
case 3822:
case 2998:
case 2964:
case 457:
case 0:
case 3368:
case 2525:
case 2119:
case 2608:
case 454:
case 1280:
case 2330:
case 1152:
case 748:
case 3983:
case 3237:
case 2335:
case 1893:
case 2520:
case 750:
case 2279:
case 365:
case 2075:
case 1052:
case 347:
case 3304:
case 2698:
case 1466:
case 2664:
case 493:
case 2573:
case 3201:
case 2070:
case 2019:
case 3317:
case 855:
case 1047:
case 1803:
case 3958:
case 4012:
case 1069:
case 946:
case 3475:
case 430:
case 3655:
case 3963:
case 746:
case 207:
case 2416:
case 3419:
case 2837:
case 221:
case 2798:
case 934:
case 1596:
case 2995:
case 734:
case 2733:
case 3470:
case 1631:
case 252:
case 2876:
case 4043:
case 439:
case 2900:
case 3423:
case 792:
case 233:
case 2708:
case 3353:
case 3911:
case 1506:
case 2048:
case 217:
case 367:
case 622:
case 2055:
case 52:
case 1518:
case 3770:
case 345:
case 2716:
case 580:
case 1666:
case 2464:
case 2553:
case 2050:
case 976:
case 857:
case 3978:
case 1212:
case 332:
case 1399:
case 73:
case 2588:
case 93:
case 394:
case 2924:
case 4080:
case 768:
case 3648:
case 3723:
case 1172:
case 4085:
case 416:
case 968:
case 3841:
case 978:
case 3008:
case 3945:
case 1549:
case 3748:
case 3623:
case 1243:
case 3859:
case 1551:
case 1874:
case 778:
case 3940:
case 3198:
case 2484:
case 408:
case 1686:
case 2504:
case 215:
case 1902:
case 966:
case 3098:
case 418:
case 873:
case 205:
case 3325:
case 2227:
case 2616:
case 3882:
case 3530:
case 4060:
case 1414:
case 3670:
case 2899:
case 3896:
case 2405:
case 2083:
case 839:
case 374:
case 1220:
case 3411:
case 735:
case 742:
case 3923:
case 1029:
case 2832:
case 2809:
case 3343:
case 2495:
case 1013:
case 3970:
case 3919:
case 1129:
case 34:
case 1161:
case 1579:
case 3975:
case 3463:
case 2490:
case 3871:
case 1844:
case 1639:
case 1273:
case 1510:
case 1739:
case 1081:
case 3593:
case 20:
case 3299:
case 4068:
case 4094:
case 443:
case 2111:
case 3232:
case 397:
case 2063:
case 3090:
case 998:
case 3745:
case 3503:
case 2011:
case 258:
case 1057:
case 3005:
case 3948:
case 240:
case 2163:
case 854:
case 2374:
case 4004:
case 3740:
case 1426:
case 1181:
case 364:
case 122:
case 3195:
case 1702:
case 3000:
case 2032:
case 1861:
case 4039:
case 1829:
case 3263:
case 1768:
case 2290:
case 1794:
case 532:
case 3106:
case 2787:
case 2883:
case 2099:
case 553:
case 2622:
case 1425:
case 922:
case 722:
case 1704:
case 2200:
case 3071:
case 3196:
case 1688:
case 2858:
case 198:
case 2132:
case 2749:
case 1813:
case 2372:
case 4002:
case 1355:
case 2009:
case 3307:
case 2205:
case 676:
case 2471:
case 2651:
case 1980:
case 1617:
case 3646:
case 2649:
case 135:
case 3991:
case 3409:
case 2406:
case 1881:
case 3937:
case 3552:
case 678:
case 2979:
case 2687:
case 2910:
case 229:
case 2718:
case 2496:
case 1694:
case 3258:
case 1685:
case 519:
case 2850:
case 2502:
case 486:
case 2208:
case 1358:
case 178:
case 2949:
case 1680:
case 500:
case 2951:
case 2855:
case 3884:
case 1412:
case 2615:
case 3027:
case 635:
case 510:
case 1765:
case 2329:
case 3326:
case 1994:
case 2592:
case 882:
case 2298:
case 2264:
case 1760:
case 3676:
case 2679:
case 2233:
case 1383:
case 642:
case 698:
case 176:
case 2342:
case 3701:
case 3255:
case 2056:
case 2462:
case 2715:
case 564:
case 3159:
case 2156:
case 3082:
case 1334:
case 3141:
case 3833:
case 3791:
case 1988:
case 2922:
case 1524:
case 301:
case 1093:
case 134:
case 1889:
case 3401:
case 823:
case 2996:
case 613:
case 1103:
case 2410:
case 1266:
case 662:
case 327:
case 1590:
case 56:
case 2823:
case 2819:
case 3491:
case 3248:
case 1378:
case 3542:
case 1852:
case 1138:
case 603:
case 150:
case 2091:
case 3179:
case 1920:
case 8:
case 3339:
case 287:
case 1643:
case 536:
case 1821:
case 2782:
case 3115:
case 2526:
case 3529:
case 159:
case 3270:
case 672:
case 2848:
case 2759:
case 241:
case 1460:
case 2741:
case 3219:
case 1054:
case 726:
case 3302:
case 2076:
case 4007:
case 3275:
case 1973:
case 1712:
case 3010:
case 2137:
case 1465:
case 2422:
case 2347:
case 2046:
case 3049:
case 1319:
case 783:
case 1370:
case 1943:
case 2878:
case 172:
case 3240:
case 1135:
case 2467:
case 659:
case 2352:
case 2771:
case 1375:
case 1598:
case 3087:
case 2389:
case 3386:
case 2418:
case 2796:
case 888:
case 565:
case 2146:
case 3149:
case 1030:
case 2927:
case 650:
case 3018:
case 3572:
case 692:
case 59:
case 2507:
case 103:
case 575:
case 2941:
case 3632:
case 2696:
case 3278:
case 3122:
case 2840:
case 2451:
case 646:
case 2224:
case 1720:
case 2531:
case 1836:
case 4026:
case 3118:
case 3609:
case 2606:
case 137:
case 2982:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757059202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,];
var gg_b = "1757059202/";

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
