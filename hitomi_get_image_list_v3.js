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
case 2266:
case 1145:
case 3395:
case 115:
case 2862:
case 3079:
case 1965:
case 3816:
case 3489:
case 576:
case 1834:
case 3325:
case 3408:
case 3212:
case 3173:
case 1104:
case 4027:
case 2778:
case 1180:
case 3938:
case 283:
case 664:
case 4068:
case 3695:
case 1742:
case 3988:
case 2153:
case 3065:
case 3758:
case 2941:
case 3519:
case 1800:
case 3909:
case 954:
case 2442:
case 810:
case 2635:
case 929:
case 2998:
case 530:
case 1918:
case 888:
case 3271:
case 1201:
case 2685:
case 2928:
case 1589:
case 382:
case 3578:
case 1106:
case 560:
case 1232:
case 2147:
case 3018:
case 3814:
case 3176:
case 1729:
case 2263:
case 1419:
case 1886:
case 3317:
case 737:
case 2558:
case 2429:
case 423:
case 2264:
case 3314:
case 369:
case 475:
case 1336:
case 498:
case 1760:
case 2267:
case 1071:
case 2049:
case 1481:
case 955:
case 2144:
case 868:
case 4026:
case 1752:
case 787:
case 362:
case 2143:
case 3748:
case 1386:
case 999:
case 3613:
case 339:
case 513:
case 114:
case 635:
case 2591:
case 1636:
case 1218:
case 1686:
case 2840:
case 332:
case 1901:
case 2228:
case 992:
case 233:
case 2022:
case 2157:
case 1634:
case 2092:
case 1300:
case 3616:
case 2650:
case 3370:
case 3209:
case 238:
case 2548:
case 646:
case 1837:
case 457:
case 4024:
case 94:
case 1383:
case 3791:
case 1572:
case 3411:
case 3670:
case 2350:
case 3721:
case 4094:
case 1333:
case 268:
case 1334:
case 4093:
case 3316:
case 538:
case 2643:
case 1538:
case 1767:
case 2644:
case 2467:
case 1231:
case 1919:
case 3810:
case 3579:
case 1355:
case 615:
case 134:
case 533:
case 2344:
case 904:
case 1186:
case 3019:
case 2343:
case 1655:
case 1202:
case 164:
case 2428:
case 2718:
case 2150:
case 3873:
case 1804:
case 1133:
case 1008:
case 3874:
case 3438:
case 3116:
case 2162:
case 3488:
case 2657:
case 1741:
case 185:
case 2942:
case 2854:
case 1100:
case 1830:
case 38:
case 3759:
case 213:
case 1880:
case 2646:
case 761:
case 2357:
case 3908:
case 1330:
case 3792:
case 905:
case 2466:
case 2353:
case 2354:
case 3239:
case 4090:
case 2857:
case 230:
case 3501:
case 1380:
case 2549:
case 3412:
case 1571:
case 3208:
case 165:
case 3374:
case 1303:
case 2654:
case 2661:
case 2021:
case 36:
case 3532:
case 3125:
case 1011:
case 1304:
case 2846:
case 135:
case 3195:
case 696:
case 3877:
case 2091:
case 260:
case 781:
case 717:
case 949:
case 146:
case 3117:
case 490:
case 2048:
case 451:
case 2844:
case 3081:
case 1902:
case 2701:
case 2347:
case 2522:
case 860:
case 2135:
case 3376:
case 2960:
case 1072:
case 1931:
case 184:
case 830:
case 1751:
case 2356:
case 1981:
case 3676:
case 2463:
case 443:
case 1606:
case 2451:
case 510:
case 1763:
case 407:
case 1236:
case 3769:
case 548:
case 3172:
case 1832:
case 2367:
case 3917:
case 3507:
case 797:
case 2628:
case 1882:
case 2985:
case 274:
case 2864:
case 1286:
case 144:
case 410:
case 2027:
case 1181:
case 2398:
case 700:
case 186:
case 1017:
case 989:
case 625:
case 590:
case 551:
case 329:
case 2160:
case 1705:
case 982:
case 2405:
case 3871:
case 2940:
case 2569:
case 1025:
case 3087:
case 779:
case 3555:
case 3037:
case 2707:
case 2341:
case 3477:
case 228:
case 1095:
case 2446:
case 3309:
case 753:
case 1283:
case 1937:
case 1233:
case 3812:
case 2250:
case 2575:
case 758:
case 3925:
case 2457:
case 1754:
case 3295:
case 624:
case 1070:
case 2962:
case 1865:
case 3000:
case 2142:
case 2730:
case 1753:
case 2780:
case 240:
case 1576:
case 170:
case 3506:
case 3225:
case 3189:
case 1403:
case 293:
case 3033:
case 1404:
case 3612:
case 1445:
case 3888:
case 3970:
case 2841:
case 3086:
case 1119:
case 136:
case 939:
case 2129:
case 1632:
case 695:
case 2094:
case 399:
case 2898:
case 1406:
case 392:
case 673:
case 2024:
case 2023:
case 1818:
case 898:
case 932:
case 1301:
case 438:
case 201:
case 3790:
case 3504:
case 1573:
case 652:
case 1574:
case 3503:
case 102:
case 962:
case 840:
case 3217:
case 4022:
case 2456:
case 2285:
case 3410:
case 3671:
case 659:
case 355:
case 2253:
case 98:
case 644:
case 3007:
case 2737:
case 32:
case 3339:
case 1077:
case 1437:
case 220:
case 1378:
case 2957:
case 3715:
case 2787:
case 3274:
case 2597:
case 3112:
case 1204:
case 750:
case 3608:
case 125:
case 2166:
case 501:
case 2946:
case 1907:
case 2944:
case 3768:
case 2164:
case 2151:
case 2943:
case 1595:
case 2699:
case 2247:
case 1740:
case 418:
case 1206:
case 2515:
case 2440:
case 3276:
case 1802:
case 4058:
case 3587:
case 598:
case 3171:
case 77:
case 2399:
case 3797:
case 1319:
case 703:
case 2329:
case 593:
case 1955:
case 1076:
case 1436:
case 2899:
case 1331:
case 2736:
case 3006:
case 2352:
case 851:
case 2829:
case 890:
case 4021:
case 124:
case 3500:
case 1255:
case 1602:
case 3794:
case 3910:
case 2596:
case 807:
case 843:
case 349:
case 2660:
case 2020:
case 342:
case 1516:
case 1302:
case 371:
case 1681:
case 2652:
case 2205:
case 2167:
case 848:
case 3533:
case 207:
case 96:
case 243:
case 1903:
case 3973:
case 173:
case 2523:
case 721:
case 195:
case 2842:
case 3586:
case 1165:
case 2246:
case 3030:
case 2700:
case 636:
case 2594:
case 1207:
case 248:
case 956:
case 3796:
case 1179:
case 2783:
case 39:
case 305:
case 1762:
case 2784:
case 2961:
case 3109:
case 609:
case 2954:
case 1483:
case 3045:
case 476:
case 251:
case 2257:
case 1750:
case 152:
case 3889:
case 2733:
case 3416:
case 1074:
case 2193:
case 61:
case 733:
case 1019:
case 1565:
case 2194:
case 2124:
case 3806:
case 1272:
case 3655:
case 3202:
case 1876:
case 3136:
case 3728:
case 738:
case 3418:
case 211:
case 3538:
case 763:
case 2675:
case 2541:
case 916:
case 1579:
case 119:
case 3355:
case 334:
case 2820:
case 3588:
case 887:
case 994:
case 3919:
case 2598:
case 811:
case 18:
case 1939:
case 3100:
case 531:
case 1518:
case 1908:
case 3978:
case 1211:
case 3134:
case 1078:
case 3089:
case 561:
case 1438:
case 4043:
case 1873:
case 3804:
case 2567:
case 3008:
case 3133:
case 3741:
case 2196:
case 2958:
case 3307:
case 3183:
case 4005:
case 3845:
case 1409:
case 1488:
case 2709:
case 1377:
case 16:
case 632:
case 973:
case 3303:
case 1877:
case 978:
case 3137:
case 2564:
case 639:
case 1582:
case 335:
case 3807:
case 267:
case 1674:
case 3603:
case 3766:
case 156:
case 606:
case 3330:
case 441:
case 662:
case 1673:
case 3604:
case 1792:
case 669:
case 237:
case 479:
case 1208:
case 952:
case 2422:
case 1911:
case 4056:
case 1289:
case 1501:
case 4054:
case 2869:
case 3072:
case 4053:
case 1310:
case 3606:
case 3482:
case 2168:
case 837:
case 3763:
case 3764:
case 400:
case 2320:
case 3751:
case 2948:
case 3219:
case 3855:
case 2052:
case 783:
case 346:
case 1117:
case 2690:
case 2771:
case 788:
case 1749:
case 1972:
case 3902:
case 2197:
case 3306:
case 3512:
case 1610:
case 217:
case 2599:
case 3637:
case 776:
case 2615:
case 3687:
case 1625:
case 2529:
case 1988:
case 1870:
case 3088:
case 3884:
case 3337:
case 2739:
case 3009:
case 421:
case 1212:
case 3104:
case 3038:
case 4085:
case 3478:
case 3834:
case 2823:
case 1814:
case 1813:
case 3106:
case 2028:
case 2397:
case 2668:
case 3232:
case 730:
case 3282:
case 2327:
case 2098:
case 2893:
case 2:
case 3539:
case 537:
case 182:
case 3201:
case 1578:
case 2190:
case 3918:
case 760:
case 1271:
case 2249:
case 3155:
case 139:
case 2063:
case 936:
case 314:
case 2623:
case 2624:
case 2868:
case 2051:
case 1613:
case 2064:
case 1472:
case 3511:
case 2169:
case 3901:
case 408:
case 2694:
case 231:
case 1032:
case 2772:
case 47:
case 3402:
case 3071:
case 2897:
case 966:
case 169:
case 2323:
case 718:
case 3336:
case 902:
case 63:
case 2393:
case 909:
case 3752:
case 3982:
case 1748:
case 3386:
case 713:
case 2827:
case 4050:
case 2394:
case 1895:
case 2992:
case 2396:
case 3384:
case 3837:
case 491:
case 450:
case 3887:
case 3600:
case 1502:
case 2259:
case 1316:
case 1912:
case 1721:
case 3333:
case 861:
case 970:
case 2560:
case 3684:
case 3683:
case 3012:
case 1209:
case 2552:
case 1581:
case 831:
case 3634:
case 1288:
case 1616:
case 1112:
case 3204:
case 1639:
case 1274:
case 2585:
case 757:
case 3907:
case 2192:
case 3678:
case 3517:
case 1977:
case 985:
case 701:
case 1495:
case 3230:
case 1007:
case 1425:
case 4029:
case 1715:
case 1811:
case 2540:
case 1389:
case 2821:
case 2658:
case 1797:
case 2497:
case 2149:
case 3735:
case 2005:
case 1171:
case 3785:
case 2848:
case 740:
case 2044:
case 2427:
case 1210:
case 934:
case 3319:
case 1727:
case 2468:
case 487:
case 503:
case 547:
case 1537:
case 4042:
case 508:
case 3619:
case 1276:
case 1587:
case 57:
case 3740:
case 3132:
case 798:
case 3525:
case 723:
case 437:
case 1583:
case 3681:
case 1372:
case 272:
case 728:
case 171:
case 3331:
case 467:
case 2714:
case 253:
case 1413:
case 3076:
case 1414:
case 1724:
case 2423:
case 3118:
case 324:
case 897:
case 984:
case 3486:
case 1500:
case 3602:
case 1672:
case 3570:
case 3381:
case 2920:
case 2348:
case 3762:
case 105:
case 1045:
case 1109:
case 521:
case 4060:
case 1796:
case 3484:
case 1188:
case 19:
case 2391:
case 655:
case 1889:
case 3980:
case 1138:
case 1726:
case 4052:
case 965:
case 3073:
case 1004:
case 2426:
case 2716:
case 3904:
case 1973:
case 200:
case 1536:
case 879:
case 3903:
case 935:
case 872:
case 30:
case 2858:
case 2770:
case 2621:
case 1586:
case 3400:
case 699:
case 2054:
case 3945:
case 707:
case 386:
case 3744:
case 129:
case 743:
case 3181:
case 3743:
case 221:
case 1775:
case 3131:
case 2475:
case 3801:
case 3705:
case 748:
case 2224:
case 1769:
case 3236:
case 1214:
case 2040:
case 3102:
case 3286:
case 2927:
case 751:
case 790:
case 3577:
case 1917:
case 3365:
case 915:
case 481:
case 4067:
case 2892:
case 2543:
case 3284:
case 1638:
case 2359:
case 1688:
case 3234:
case 2505:
case 2915:
case 1812:
case 3757:
case 1609:
case 1087:
case 1338:
case 3665:
case 3407:
case 821:
case 604:
case 1309:
case 4028:
case 2777:
case 2659:
case 1555:
case 3200:
case 3379:
case 154:
case 1388:
case 3404:
case 1473:
case 3016:
case 1189:
case 1034:
case 1139:
case 2622:
case 850:
case 1888:
case 1084:
case 3879:
case 2062:
case 2556:
case 3445:
case 3510:
case 3900:
case 345:
case 1000:
case 3237:
case 3753:
case 2158:
case 208:
case 1295:
case 3865:
case 1506:
case 3480:
case 370:
case 1312:
case 3934:
case 2322:
case 177:
case 3576:
case 2859:
case 1913:
case 87:
case 1503:
case 302:
case 2924:
case 2923:
case 808:
case 3936:
case 1790:
case 3573:
case 1504:
case 2297:
case 4066:
case 2649:
case 3986:
case 1671:
case 2227:
case 155:
case 2993:
case 720:
case 605:
case 1217:
case 309:
case 35:
case 2268:
case 2561:
case 336:
case 291:
case 3014:
case 3406:
case 2349:
case 1580:
case 2776:
case 1644:
case 1467:
case 311:
case 1643:
case 3541:
case 2588:
case 3820:
case 2509:
case 688:
case 2798:
case 3669:
case 1498:
case 1344:
case 885:
case 1847:
case 3124:
case 1428:
case 1305:
case 1559:
case 2202:
case 2418:
case 264:
case 4077:
case 2134:
case 416:
case 2089:
case 739:
case 2133:
case 3567:
case 2008:
case 3126:
case 494:
case 2307:
case 1346:
case 732:
case 2184:
case 1441:
case 2039:
case 3709:
case 1657:
case 864:
case 769:
case 1853:
case 118:
case 1058:
case 1765:
case 1854:
case 1861:
case 596:
case 3459:
case 1357:
case 834:
case 2978:
case 2880:
case 514:
case 762:
case 113:
case 3528:
case 1646:
case 927:
case 2330:
case 2604:
case 1353:
case 526:
case 2571:
case 337:
case 3921:
case 2278:
case 997:
case 2630:
case 2304:
case 1654:
case 1021:
case 3258:
case 3563:
case 2137:
case 4076:
case 782:
case 3564:
case 367:
case 2807:
case 235:
case 1844:
case 4073:
case 979:
case 3052:
case 3566:
case 1185:
case 4074:
case 1843:
case 452:
case 246:
case 3620:
case 1522:
case 71:
case 3771:
case 1135:
case 3875:
case 515:
case 3449:
case 972:
case 3197:
case 835:
case 1732:
case 495:
case 3390:
case 2931:
case 668:
case 40:
case 2072:
case 958:
case 2482:
case 1451:
case 1464:
case 2763:
case 1229:
case 3168:
case 1647:
case 865:
case 3320:
case 284:
case 2764:
case 473:
case 1952:
case 2981:
case 2219:
case 3292:
case 2337:
case 2884:
case 1266:
case 215:
case 3826:
case 3789:
case 2104:
case 1778:
case 3315:
case 486:
case 2478:
case 3222:
case 2387:
case 4017:
case 183:
case 584:
case 2637:
case 2800:
case 1161:
case 2742:
case 2130:
case 1153:
case 1941:
case 3368:
case 3120:
case 1635:
case 565:
case 1998:
case 1685:
case 2201:
case 2589:
case 1340:
case 3190:
case 2508:
case 381:
case 2918:
case 3249:
case 1335:
case 3823:
case 1967:
case 535:
case 3824:
case 2232:
case 1499:
case 4095:
case 3894:
case 4025:
case 2282:
case 1264:
case 2729:
case 2886:
case 1385:
case 3893:
case 1558:
case 618:
case 2431:
case 1267:
case 3897:
case 2071:
case 1049:
case 3175:
case 2932:
case 78:
case 2752:
case 1781:
case 1951:
case 4016:
case 2982:
case 3827:
case 2481:
case 1452:
case 361:
case 3394:
case 1591:
case 296:
case 3868:
case 660:
case 3064:
case 470:
case 1298:
case 2901:
case 2511:
case 331:
case 3694:
case 1702:
case 3693:
case 3772:
case 2402:
case 2686:
case 991:
case 3560:
case 2684:
case 1662:
case 409:
case 1022:
case 1157:
case 896:
case 2012:
case 534:
case 3066:
case 466:
case 2634:
case 402:
case 676:
case 2300:
case 2279:
case 1241:
case 3396:
case 3992:
case 2383:
case 712:
case 4013:
case 2265:
case 1146:
case 1362:
case 4014:
case 1966:
case 97:
case 3815:
case 3259:
case 2600:
case 1350:
case 903:
case 3326:
case 45:
case 2333:
case 464:
case 3891:
case 3795:
case 1261:
case 1254:
case 674:
case 1253:
case 1568:
case 2230:
case 1957:
case 894:
case 327:
case 536:
case 2280:
case 3725:
case 3415:
case 3540:
case 120:
case 2487:
case 3821:
case 2378:
case 755:
case 1597:
case 509:
case 799:
case 1946:
case 1342:
case 792:
case 2517:
case 3192:
case 3358:
case 1151:
case 2595:
case 3468:
case 1944:
case 1515:
case 1440:
case 623:
case 2619:
case 2525:
case 1629:
case 3975:
case 1069:
case 1435:
case 545:
case 1075:
case 3969:
case 2101:
case 911:
case 3005:
case 1399:
case 2831:
case 1329:
case 3848:
case 2785:
case 2955:
case 3717:
case 777:
case 1485:
case 3043:
case 2319:
case 1256:
case 216:
case 1899:
case 435:
case 2331:
case 3269:
case 2076:
case 3493:
case 224:
case 2819:
case 852:
case 2486:
case 4011:
case 2570:
case 358:
case 1829:
case 3494:
case 1786:
case 3920:
case 1660:
case 3562:
case 3056:
case 698:
case 2631:
case 1596:
case 379:
case 2010:
case 1652:
case 1526:
case 3648:
case 372:
case 895:
case 1090:
case 2516:
case 3275:
case 2906:
case 878:
case 2302:
case 2904:
case 657:
case 1523:
case 484:
case 273:
case 3053:
case 722:
case 20:
case 1594:
case 295:
case 1593:
case 278:
case 2945:
case 3061:
case 2400:
case 1784:
case 2762:
case 1954:
case 1961:
case 2484:
case 259:
case 2179:
case 1953:
case 1783:
case 3391:
case 601:
case 397:
case 2750:
case 1733:
case 2074:
case 1450:
case 1734:
case 3426:
case 3469:
case 1698:
case 595:
case 3224:
case 620:
case 79:
case 2236:
case 3223:
case 50:
case 1863:
case 2618:
case 3293:
case 1864:
case 1851:
case 1985:
case 2882:
case 573:
case 286:
case 3968:
case 2017:
case 4038:
case 1027:
case 2181:
case 1667:
case 3148:
case 2131:
case 559:
case 1405:
case 3849:
case 1940:
case 1097:
case 1328:
case 3035:
case 3121:
case 1015:
case 749:
case 2665:
case 524:
case 123:
case 128:
case 2407:
case 2095:
case 3777:
case 771:
case 2379:
case 2200:
case 1341:
case 1707:
case 3191:
case 3544:
case 2283:
case 2365:
case 3296:
case 2284:
case 3359:
case 1575:
case 3822:
case 2234:
case 426:
case 844:
case 1457:
case 2987:
case 1250:
case 2237:
case 1461:
case 3996:
case 2753:
case 2754:
case 1453:
case 2070:
case 1962:
case 2480:
case 2934:
case 496:
case 3547:
case 3322:
case 1780:
case 2933:
case 2287:
case 3215:
case 1950:
case 809:
case 3774:
case 704:
case 1666:
case 3050:
case 193:
case 2403:
case 3773:
case 1590:
case 3622:
case 2879:
case 1096:
case 1129:
case 2632:
case 1898:
case 3561:
case 3554:
case 2119:
case 1093:
case 648:
case 350:
case 607:
case 1023:
case 391:
case 643:
case 2014:
case 1240:
case 1651:
case 3349:
case 2406:
case 3776:
case 1199:
case 1447:
case 845:
case 2574:
case 3924:
case 3490:
case 72:
case 266:
case 101:
case 2936:
case 3923:
case 1867:
case 3297:
case 3227:
case 961:
case 2986:
case 870:
case 1351:
case 3993:
case 3420:
case 3994:
case 3710:
case 209:
case 1363:
case 1456:
case 746:
case 2625:
case 1529:
case 21:
case 2065:
case 3153:
case 2909:
case 882:
case 2519:
case 3266:
case 1739:
case 1896:
case 1292:
case 2079:
case 3862:
case 429:
case 2174:
case 2489:
case 1315:
case 1708:
case 1789:
case 784:
case 2408:
case 1959:
case 2173:
case 2212:
case 1397:
case 3499:
case 1668:
case 3147:
case 687:
case 2176:
case 3385:
case 1542:
case 3640:
case 1893:
case 1:
case 3719:
case 1894:
case 3251:
case 1098:
case 1327:
case 1120:
case 289:
case 1697:
case 2110:
case 1368:
case 181:
case 81:
case 1067:
case 3340:
case 53:
case 3928:
case 735:
case 1190:
case 3298:
case 2613:
case 1051:
case 3591:
case 3521:
case 1772:
case 4000:
case 2971:
case 1949:
case 957:
case 2472:
case 2032:
case 44:
case 3731:
case 2001:
case 1175:
case 269:
case 2314:
case 4084:
case 1323:
case 637:
case 3835:
case 3267:
case 1324:
case 4083:
case 2313:
case 3452:
case 1394:
case 4033:
case 161:
case 206:
case 2817:
case 3781:
case 3964:
case 3362:
case 3966:
case 1396:
case 492:
case 2791:
case 3146:
case 2721:
case 499:
case 2825:
case 2502:
case 1815:
case 519:
case 333:
case 1560:
case 839:
case 3662:
case 993:
case 3022:
case 3092:
case 2288:
case 2616:
case 3650:
case 1626:
case 764:
case 3344:
case 1029:
case 2019:
case 2114:
case 1375:
case 42:
case 1124:
case 4007:
case 3847:
case 3305:
case 1890:
case 3999:
case 212:
case 1369:
case 3467:
case 111:
case 1248:
case 2810:
case 1541:
case 2579:
case 3856:
case 1820:
case 3765:
case 3058:
case 1042:
case 812:
case 3854:
case 1598:
case 532:
case 187:
case 2759:
case 2989:
case 3646:
case 4055:
case 819:
case 1459:
case 1221:
case 404:
case 2873:
case 1738:
case 562:
case 2874:
case 3441:
case 3657:
case 2488:
case 1196:
case 1958:
case 569:
case 1788:
case 3654:
case 1115:
case 943:
case 26:
case 907:
case 1551:
case 4006:
case 2195:
case 1258:
case 3091:
case 1563:
case 3242:
case 23:
case 3361:
case 661:
case 256:
case 1712:
case 3857:
case 2501:
case 990:
case 2722:
case 137:
case 1921:
case 589:
case 2208:
case 3299:
case 83:
case 4030:
case 3960:
case 3140:
case 1390:
case 715:
case 1320:
case 3463:
case 2676:
case 3952:
case 3356:
case 4080:
case 2310:
case 3464:
case 3647:
case 4003:
case 3843:
case 2117:
case 3592:
case 1690:
case 3048:
case 2081:
case 1127:
case 376:
case 3844:
case 2471:
case 3701:
case 49:
case 1771:
case 3135:
case 1620:
case 2749:
case 3522:
case 3656:
case 1060:
case 1875:
case 3152:
case 3027:
case 3667:
case 229:
case 3160:
case 1475:
case 1557:
case 795:
case 3097:
case 3940:
case 3328:
case 1223:
case 627:
case 2769:
case 1040:
case 1997:
case 2214:
case 759:
case 2213:
case 2172:
case 4065:
case 3698:
case 1469:
case 1224:
case 41:
case 3755:
case 3864:
case 3985:
case 752:
case 3851:
case 1927:
case 3863:
case 2995:
case 1892:
case 482:
case 1543:
case 3262:
case 2638:
case 1544:
case 542:
case 549:
case 2812:
case 2216:
case 3641:
case 3457:
case 2688:
case 2087:
case 3015:
case 910:
case 829:
case 3707:
case 1659:
case 822:
case 2477:
case 254:
case 2388:
case 1191:
case 988:
case 393:
case 2838:
case 3704:
case 1773:
case 672:
case 406:
case 3590:
case 3026:
case 2108:
case 1774:
case 3703:
case 3666:
case 2473:
case 899:
case 2083:
case 2809:
case 892:
case 3096:
case 2139:
case 3841:
case 375:
case 1062:
case 4032:
case 108:
case 963:
case 24:
case 3142:
case 2000:
case 17:
case 3454:
case 1158:
case 658:
case 1392:
case 794:
case 1322:
case 1926:
case 653:
case 439:
case 277:
case 1859:
case 968:
case 2506:
case 103:
case 2916:
case 4082:
case 147:
case 1547:
case 697:
case 1923:
case 84:
case 2790:
case 2913:
case 2503:
case 3235:
case 1710:
case 2217:
case 1994:
case 3456:
case 3285:
case 3363:
case 877:
case 1649:
case 3351:
case 2410:
case 2086:
case 1561:
case 299:
case 3828:
case 3651:
case 2580:
case 600:
case 3024:
case 1776:
case 191:
case 725:
case 3023:
case 3240:
case 804:
case 75:
case 555:
case 2608:
case 3946:
case 412:
case 1192:
case 1358:
case 1046:
case 918:
case 702:
case 2495:
case 22:
case 3568:
case 2007:
case 592:
case 2339:
case 3261:
case 1795:
case 3254:
case 4019:
case 1725:
case 1821:
case 599:
case 1658:
case 2308:
case 2715:
case 913:
case 1149:
case 1005:
case 82:
case 3435:
case 2797:
case 1969:
case 1220:
case 2727:
case 2210:
case 1044:
case 1717:
case 2055:
case 3163:
case 2768:
case 3943:
case 3699:
case 3247:
case 2872:
case 3515:
case 745:
case 2584:
case 1562:
case 1056:
case 249:
case 3090:
case 3947:
case 2534:
case 1550:
case 3205:
case 3652:
case 2372:
case 2976:
case 2533:
case 43:
case 172:
case 3526:
case 1648:
case 141:
case 1423:
case 647:
case 1990:
case 1424:
case 554:
case 1269:
case 2006:
case 3736:
case 3128:
case 2793:
case 2672:
case 3352:
case 3198:
case 3956:
case 1348:
case 1920:
case 3829:
case 158:
case 2794:
case 2500:
case 29:
case 2188:
case 2839:
case 3784:
case 205:
case 3954:
case 2311:
case 3734:
case 2004:
case 1426:
case 529:
case 1716:
case 390:
case 1321:
case 2416:
case 2003:
case 930:
case 343:
case 2973:
case 1159:
case 3523:
case 100:
case 2536:
case 1770:
case 3593:
case 2277:
case 1621:
case 1061:
case 871:
case 4002:
case 3842:
case 348:
case 3594:
case 2030:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744038001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,];
var gg_b = "1744038001/";

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
