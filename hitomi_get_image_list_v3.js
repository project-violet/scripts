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
case 2441:
case 2174:
case 3700:
case 1468:
case 692:
case 3858:
case 1148:
case 3906:
case 1677:
case 2778:
case 1757:
case 2068:
case 946:
case 301:
case 1041:
case 2689:
case 1258:
case 2919:
case 1706:
case 2277:
case 693:
case 656:
case 3944:
case 3957:
case 780:
case 4069:
case 2868:
case 3175:
case 381:
case 1841:
case 3151:
case 2172:
case 3477:
case 1587:
case 1109:
case 3439:
case 3668:
case 298:
case 700:
case 261:
case 3099:
case 3241:
case 4017:
case 121:
case 3338:
case 3843:
case 2537:
case 2967:
case 2643:
case 2945:
case 2579:
case 495:
case 372:
case 4091:
case 2592:
case 92:
case 2321:
case 1522:
case 3263:
case 3513:
case 4081:
case 1451:
case 1391:
case 2674:
case 2765:
case 748:
case 2747:
case 735:
case 1016:
case 2331:
case 3453:
case 354:
case 589:
case 3308:
case 3315:
case 3072:
case 2051:
case 2312:
case 821:
case 3010:
case 893:
case 1129:
case 964:
case 2189:
case 2416:
case 2253:
case 3448:
case 3936:
case 2594:
case 3872:
case 2610:
case 2796:
case 3168:
case 543:
case 2980:
case 3651:
case 3810:
case 3973:
case 3675:
case 3771:
case 2752:
case 3755:
case 3216:
case 3061:
case 3926:
case 690:
case 2143:
case 1736:
case 2463:
case 542:
case 1534:
case 3074:
case 783:
case 1560:
case 1210:
case 1964:
case 1971:
case 1816:
case 369:
case 3190:
case 3379:
case 2136:
case 648:
case 1000:
case 635:
case 649:
case 3180:
case 368:
case 182:
case 3501:
case 2642:
case 1186:
case 3645:
case 3667:
case 602:
case 3741:
case 2400:
case 880:
case 3478:
case 485:
case 1588:
case 183:
case 1503:
case 931:
case 2528:
case 3842:
case 3327:
case 1598:
case 2867:
case 2340:
case 3200:
case 357:
case 800:
case 1257:
case 2278:
case 1799:
case 103:
case 3042:
case 2729:
case 1244:
case 149:
case 1789:
case 683:
case 466:
case 2644:
case 1758:
case 1206:
case 1800:
case 3999:
case 790:
case 208:
case 3619:
case 432:
case 671:
case 2880:
case 2673:
case 63:
case 1820:
case 2549:
case 3972:
case 849:
case 319:
case 3716:
case 803:
case 3514:
case 848:
case 1062:
case 3220:
case 721:
case 2366:
case 680:
case 1652:
case 3826:
case 3167:
case 3145:
case 3454:
case 3394:
case 2142:
case 48:
case 1864:
case 240:
case 802:
case 1696:
case 3465:
case 2420:
case 600:
case 1490:
case 1350:
case 2106:
case 3026:
case 3961:
case 1055:
case 234:
case 3531:
case 1071:
case 3307:
case 13:
case 3262:
case 1335:
case 2515:
case 2508:
case 882:
case 1963:
case 1665:
case 3356:
case 1020:
case 598:
case 871:
case 2430:
case 3036:
case 1761:
case 1576:
case 3119:
case 4025:
case 2471:
case 3452:
case 2395:
case 3073:
case 2385:
case 883:
case 444:
case 1533:
case 1862:
case 180:
case 2444:
case 1327:
case 2155:
case 2387:
case 3598:
case 229:
case 1478:
case 228:
case 3588:
case 2397:
case 2457:
case 122:
case 383:
case 4027:
case 3503:
case 371:
case 2768:
case 2130:
case 1006:
case 3186:
case 1943:
case 1645:
case 2267:
case 55:
case 2245:
case 2517:
case 1337:
case 3242:
case 123:
case 3305:
case 3318:
case 425:
case 236:
case 2302:
case 2120:
case 3941:
case 3000:
case 191:
case 1180:
case 169:
case 1190:
case 657:
case 1379:
case 3743:
case 3154:
case 2442:
case 1844:
case 1989:
case 2600:
case 2162:
case 210:
case 1857:
case 995:
case 3206:
case 3758:
case 819:
case 3244:
case 3789:
case 2939:
case 349:
case 691:
case 3257:
case 770:
case 1200:
case 1806:
case 1958:
case 4094:
case 3864:
case 772:
case 3273:
case 1447:
case 3696:
case 1145:
case 3686:
case 3916:
case 4084:
case 2290:
case 2953:
case 3652:
case 3830:
case 3772:
case 2751:
case 2896:
case 1514:
case 2047:
case 118:
case 2065:
case 1910:
case 773:
case 42:
case 2054:
case 1271:
case 119:
case 1690:
case 1836:
case 620:
case 2360:
case 781:
case 1972:
case 3820:
case 1073:
case 2847:
case 2865:
case 3533:
case 1392:
case 2854:
case 2581:
case 1521:
case 3654:
case 2426:
case 99:
case 1486:
case 1119:
case 1496:
case 3774:
case 2100:
case 260:
case 3335:
case 1262:
case 4007:
case 3064:
case 3523:
case 2473:
case 1512:
case 3055:
case 2311:
case 3071:
case 579:
case 3490:
case 1026:
case 618:
case 619:
case 3480:
case 1899:
case 2829:
case 431:
case 3629:
case 3706:
case 3258:
case 255:
case 2443:
case 101:
case 3900:
case 3299:
case 3289:
case 2877:
case 3148:
case 458:
case 3639:
case 2719:
case 3468:
case 459:
case 513:
case 2499:
case 278:
case 966:
case 172:
case 601:
case 1429:
case 2039:
case 2116:
case 1843:
case 3153:
case 1058:
case 854:
case 932:
case 356:
case 2268:
case 173:
case 475:
case 2745:
case 719:
case 2029:
case 467:
case 3109:
case 4028:
case 3243:
case 2458:
case 905:
case 2388:
case 2303:
case 1328:
case 1151:
case 933:
case 2009:
case 2550:
case 3129:
case 3962:
case 1010:
case 2965:
case 562:
case 2323:
case 1308:
case 1315:
case 2535:
case 1383:
case 3532:
case 1453:
case 1393:
case 4015:
case 4008:
case 3648:
case 563:
case 1762:
case 170:
case 2410:
case 3522:
case 1263:
case 3475:
case 881:
case 2333:
case 3451:
case 2472:
case 3391:
case 528:
case 3381:
case 1861:
case 2848:
case 1595:
case 4049:
case 2952:
case 3816:
case 3971:
case 3653:
case 3955:
case 722:
case 3773:
case 3964:
case 654:
case 2996:
case 1720:
case 3534:
case 3930:
case 3272:
case 2251:
case 1074:
case 1061:
case 2790:
case 944:
case 2853:
case 2809:
case 1566:
case 1755:
case 1810:
case 1651:
case 47:
case 1675:
case 1764:
case 510:
case 1730:
case 417:
case 3726:
case 1448:
case 769:
case 1936:
case 2279:
case 2917:
case 1040:
case 59:
case 1901:
case 1788:
case 4045:
case 4067:
case 2124:
case 233:
case 3541:
case 697:
case 3887:
case 3998:
case 1637:
case 979:
case 978:
case 2602:
case 2738:
case 3988:
case 232:
case 386:
case 138:
case 1759:
case 409:
case 1543:
case 2227:
case 1679:
case 1319:
case 2539:
case 3240:
case 1156:
case 3846:
case 4019:
case 197:
case 2005:
case 2018:
case 1182:
case 3125:
case 306:
case 489:
case 2646:
case 1204:
case 3378:
case 2577:
case 1558:
case 804:
case 1192:
case 1589:
case 638:
case 3479:
case 2529:
case 1246:
case 645:
case 639:
case 2132:
case 3437:
case 31:
case 84:
case 285:
case 3087:
case 897:
case 1684:
case 1510:
case 3456:
case 2624:
case 2050:
case 2509:
case 1866:
case 3386:
case 595:
case 104:
case 2187:
case 2495:
case 1127:
case 3352:
case 3824:
case 776:
case 2197:
case 2485:
case 3032:
case 2634:
case 3860:
case 1380:
case 2320:
case 684:
case 3516:
case 3266:
case 1390:
case 1137:
case 14:
case 1095:
case 244:
case 1085:
case 3022:
case 2102:
case 2749:
case 216:
case 3834:
case 2660:
case 1013:
case 3105:
case 3118:
case 2284:
case 1435:
case 2622:
case 1912:
case 604:
case 1692:
case 2466:
case 2207:
case 1561:
case 3494:
case 3354:
case 1776:
case 1211:
case 1895:
case 1232:
case 3822:
case 1970:
case 3034:
case 2825:
case 230:
case 3484:
case 1574:
case 3712:
case 2991:
case 3933:
case 64:
case 2632:
case 2850:
case 36:
case 3731:
case 1607:
case 3976:
case 3295:
case 845:
case 28:
case 95:
case 440:
case 2835:
case 838:
case 547:
case 3213:
case 2104:
case 1222:
case 187:
case 3438:
case 2123:
case 1115:
case 3003:
case 1108:
case 3740:
case 1417:
case 544:
case 3669:
case 461:
case 498:
case 3329:
case 499:
case 1704:
case 3191:
case 910:
case 1557:
case 50:
case 1940:
case 3377:
case 2017:
case 784:
case 3500:
case 3059:
case 1203:
case 352:
case 247:
case 58:
case 1298:
case 2817:
case 2737:
case 704:
case 1638:
case 3888:
case 2341:
case 1542:
case 4068:
case 3201:
case 437:
case 929:
case 894:
case 2069:
case 74:
case 2727:
case 2688:
case 3902:
case 396:
case 963:
case 1628:
case 2603:
case 3221:
case 1233:
case 797:
case 1812:
case 2414:
case 1913:
case 566:
case 1615:
case 2925:
case 1870:
case 876:
case 1995:
case 1693:
case 1711:
case 374:
case 505:
case 2881:
case 3348:
case 2293:
case 2676:
case 3212:
case 1014:
case 2565:
case 2208:
case 3833:
case 3562:
case 2782:
case 3932:
case 1722:
case 3785:
case 3691:
case 2935:
case 2633:
case 960:
case 3681:
case 29:
case 3795:
case 194:
case 3876:
case 2081:
case 3353:
case 3493:
case 1573:
case 2091:
case 1138:
case 1649:
case 3408:
case 912:
case 3415:
case 751:
case 2470:
case 1734:
case 2316:
case 3076:
case 2198:
case 1031:
case 3555:
case 4075:
case 694:
case 2103:
case 3564:
case 3214:
case 2188:
case 1724:
case 2249:
case 2784:
case 3934:
case 1070:
case 2596:
case 2586:
case 3309:
case 1059:
case 1500:
case 653:
case 1339:
case 2269:
case 715:
case 478:
case 909:
case 2121:
case 1181:
case 3746:
case 943:
case 1428:
case 2403:
case 3557:
case 127:
case 4029:
case 2170:
case 3704:
case 2399:
case 724:
case 1329:
case 3417:
case 1669:
case 2131:
case 3193:
case 1098:
case 1946:
case 3183:
case 1003:
case 3108:
case 3797:
case 3787:
case 627:
case 2567:
case 52:
case 850:
case 307:
case 455:
case 1888:
case 1803:
case 3149:
case 376:
case 3638:
case 3702:
case 1997:
case 1987:
case 1617:
case 3469:
case 2343:
case 259:
case 3298:
case 3801:
case 441:
case 3203:
case 152:
case 258:
case 2114:
case 1876:
case 2621:
case 1713:
case 1270:
case 2725:
case 1691:
case 2049:
case 896:
case 853:
case 3014:
case 1562:
case 2361:
case 1231:
case 3995:
case 3693:
case 2631:
case 27:
case 2992:
case 174:
case 1449:
case 706:
case 2982:
case 3985:
case 2735:
case 3870:
case 1823:
case 2808:
case 217:
case 2670:
case 2956:
case 3831:
case 2750:
case 2281:
case 3526:
case 3724:
case 786:
case 1530:
case 1934:
case 3351:
case 3491:
case 2372:
case 2433:
case 2008:
case 2015:
case 1960:
case 2083:
case 3012:
case 3031:
case 1766:
case 3481:
case 525:
case 2580:
case 2849:
case 2984:
case 1483:
case 1033:
case 1408:
case 1415:
case 546:
case 2423:
case 1117:
case 1493:
case 1353:
case 3966:
case 2101:
case 345:
case 339:
case 815:
case 3679:
case 410:
case 517:
case 665:
case 2404:
case 1802:
case 338:
case 186:
case 1903:
case 1618:
case 1046:
case 2717:
case 3637:
case 2879:
case 57:
case 2342:
case 1887:
case 1897:
case 1004:
case 3202:
case 326:
case 1541:
case 998:
case 2446:
case 961:
case 3788:
case 3798:
case 3627:
case 3901:
case 999:
case 2027:
case 428:
case 2769:
case 214:
case 1087:
case 1804:
case 429:
case 937:
case 3405:
case 1135:
case 686:
case 463:
case 3558:
case 2195:
case 2487:
case 1427:
case 2357:
case 2497:
case 1002:
case 106:
case 3204:
case 1846:
case 397:
case 3319:
case 1240:
case 2079:
case 462:
case 66:
case 2373:
case 1834:
case 3224:
case 1105:
case 2082:
case 796:
case 3435:
case 3095:
case 865:
case 1516:
case 2056:
case 1714:
case 911:
case 3425:
case 4052:
case 2884:
case 3572:
case 806:
case 2551:
case 2949:
case 2422:
case 3234:
case 1824:
case 1032:
case 2666:
case 2007:
case 2894:
case 3866:
case 1386:
case 3694:
case 3684:
case 3914:
case 1456:
case 752:
case 2084:
case 886:
case 1295:
case 1650:
case 115:
case 559:
case 3066:
case 264:
case 1731:
case 16:
case 3607:
case 1635:
case 1933:
case 2460:
case 2424:
case 1347:
case 3970:
case 3656:
case 1822:
case 531:
case 3885:
case 1365:
case 2882:
case 2235:
case 3574:
case 3561:
case 2892:
case 4047:
case 3895:
case 3692:
case 2695:
case 3931:
case 2781:
case 2250:
case 3912:
case 3733:
case 2791:
case 2856:
case 1060:
case 2908:
case 2613:
case 3977:
case 3219:
case 3569:
case 142:
case 203:
case 248:
case 426:
case 1045:
case 2789:
case 1729:
case 451:
case 2206:
case 1777:
case 1657:
case 3346:
case 2678:
case 2800:
case 2147:
case 445:
case 3878:
case 143:
case 2445:
case 1136:
case 2743:
case 3406:
case 1019:
case 497:
case 590:
case 362:
case 2000:
case 2559:
case 2941:
case 336:
case 1173:
case 2242:
case 834:
case 3245:
case 189:
case 2419:
case 643:
case 1642:
case 3130:
case 2196:
case 996:
case 3164:
case 1528:
case 283:
case 953:
case 3457:
case 2588:
case 328:
case 3444:
case 3096:
case 593:
case 2480:
case 974:
case 2490:
case 3948:
case 1254:
case 3052:
case 2055:
case 1593:
case 1583:
case 521:
case 1265:
case 1247:
case 2523:
case 1515:
case 888:
case 737:
case 3100:
case 2774:
case 2665:
case 1080:
case 1090:
case 640:
case 2654:
case 3854:
case 1144:
case 1471:
case 280:
case 950:
case 3591:
case 44:
case 4095:
case 634:
case 1549:
case 3360:
case 1296:
case 1673:
case 1975:
case 2226:
case 1753:
case 799:
case 1636:
case 3054:
case 312:
case 3620:
case 798:
case 842:
case 761:
case 3334:
case 2772:
case 3896:
case 3664:
case 3775:
case 2830:
case 2652:
case 3953:
case 3290:
case 1366:
case 2916:
case 2871:
case 1626:
case 2696:
case 3324:
case 2273:
case 1462:
case 2841:
case 1172:
case 3303:
case 1868:
case 3388:
case 2597:
case 3458:
case 2742:
case 3029:
case 292:
case 198:
case 3268:
case 986:
case 256:
case 3518:
case 53:
case 3077:
case 637:
case 3116:
case 3489:
case 379:
case 1967:
case 3039:
case 740:
case 378:
case 293:
case 811:
case 906:
case 2468:
case 1441:
case 3719:
case 1161:
case 661:
case 3877:
case 476:
case 1658:
case 3839:
case 2744:
case 2677:
case 1699:
case 2041:
case 500:
case 3163:
case 1068:
case 2504:
case 3443:
case 355:
case 2706:
case 2629:
case 977:
case 1594:
case 1990:
case 2609:
case 2726:
case 1851:
case 3141:
case 2920:
case 1584:
case 111:
case 788:
case 1672:
case 3048:
case 2736:
case 3853:
case 3790:
case 2272:
case 3251:
case 837:
case 1463:
case 1314:
case 3275:
case 2210:
case 2560:
case 2955:
case 2816:
case 3848:
case 3053:
case 1158:
case 924:
case 1592:
case 3472:
case 2451:
case 3333:
case 3525:
case 4021:
case 1674:
case 3410:
case 742:
case 611:
case 2016:
case 1661:
case 35:
case 915:
case 1248:
case 582:
case 1312:
case 3535:
case 3323:
case 3947:
case 3965:
case 290:
case 1189:
case 709:
case 4070:
case 272:
case 655:
case 1359:
case 1116:
case 4059:
case 1039:
case 3945:
case 2058:
case 427:
case 1268:
case 2338:
case 3110:
case 1641:
case 712:
case 2668:
case 273:
case 2439:
case 1029:
case 2089:
case 1767:
case 1398:
case 1458:
case 2477:
case 3172:
case 951:
case 2328:
case 2175:
case 1388:
case 2957:
case 496:
case 1829:
case 3239:
case 2889:
case 155:
case 3699:
case 518:
case 201:
case 337:
case 3778:
case 3658:
case 1719:
case 452:
case 2906:
case 2043:
case 1877:
case 2700:
case 141:
case 2349:
case 65:
case 557:
case 2074:
case 1251:
case 3314:
case 1853:
case 1986:
case 3143:
case 1790:
case 1616:
case 450:
case 2926:
case 855:
case 2061:
case 2755:
case 2771:
case 2764:
case 2675:
case 3672:
case 3980:
case 2730:
case 3875:
case 1474:
case 2872:
case 3610:
case 3851:
case 3584:
case 904:
case 3990:
case 1954:
case 3416:
case 3189:
case 710:
case 591:
case 1965:
case 568:
case 3075:
case 3312:
case 523:
case 2308:
case 4023:
case 3331:
case 2393:
case 3248:
case 3747:
case 1410:
case 3765:
case 2762:
case 270:
case 3556:
case 2874:
case 1525:
case 2513:
case 2263:
case 1848:
case 3592:
case 2619:
case 1929:
case 309:
case 308:
case 1878:
case 1162:
case 110:
case 343:
case 1346:
case 629:
case 3777:
case 628:
case 4046:
case 662:
case 3045:
case 4004:
case 1939:
case 3729:
case 2042:
case 342:
case 1219:
case 129:
case 1155:
case 1387:
case 3867:
case 2327:
case 1444:
case 1171:
case 2842:
case 222:
case 2478:
case 570:
case 163:
case 465:
case 860:
case 610:
case 2645:
case 2943:
case 2337:
case 1517:
case 1267:
case 2501:
case 389:
case 406:
case 136:
case 1078:
case 2180:
case 162:
case 1120:
case 976:
case 1406:
case 828:
case 3464:
case 3157:
case 2521:
case 3395:
case 3455:
case 4022:
case 1581:
case 2392:
case 829:
case 1854:
case 3748:
case 1662:
case 160:
case 863:
case 2356:
case 3080:
case 2512:
case 3265:
case 4011:
case 1332:
case 3508:
case 836:
case 1052:
case 4032:
case 2531:
case 1436:
case 1086:
case 3420:
case 2465:
case 778:
case 810:
case 3462:
case 1630:
case 2384:
case 113:
case 2454:
case 3626:
case 3709:
case 660:
case 2145:
case 2826:
case 1886:
case 1896:
case 1775:
case 46:
case 112:
case 2873:
case 1334:
case 424:
case 2690:
case 4034:
case 2255:
case 1909:
case 219:
case 3252:
case 3286:
case 3890:
case 2836:
case 2972:
case 3951:
case 2230:
case 1360:
case 3880:
case 3114:
case 147:
case 923:
case 1228:
case 2203:
case 1817:
case 2801:
case 3343:
case 2469:
case 3601:
case 969:
case 3705:
case 991:
case 2702:
case 2638:
case 276:
case 2149:
case 8:
case 4041:
case 2542:
case 89:
case 1698:
case 1918:
case 2259:
case 1905:
case 2797:
case 716:
case 1688:
case 3028:
case 1123:
case 2108:
case 2183:
case 3112:
case 287:
case 957:
case 54:
case 2193:
case 3131:
case 2417:
case 375:
case 3389:
case 2506:
case 492:
case 2557:
case 421:
case 1017:
case 2001:
case 2940:
case 3498:
case 3358:
case 456:
case 493:
case 3519:
case 78:
case 195:
case 2021:
case 2966:
case 1431:
case 2760:
case 1091:
case 2138:
case 2814:
case 2734:
case 1159:
case 3849:
case 3614:
case 3580:
case 3590:
case 3994:
case 1552:
case 1421:
case 3093:
case 2012:
case 1188:
case 3008:
case 3015:
case 2128:
case 2491:
case 1596:
case 732:
case 1249:
case 895:
case 490:
case 6:
case 1794:
case 1586:
case 539:
case 545:
case 2831:
case 3893:
case 4063:
case 2812:
case 3956:
case 1414:
case 317:
case 847:
case 2233:
case 3291:
case 3735:
case 2985:
case 2608:
case 2732:
case 2615:
case 3982:
case 1623:
case 2711:
case 1707:
case 2693:
case 2995:
case 1293:
case 2821:
case 1208:
case 1215:
case 526:
case 1891:
case 1756:
case 551:
case 1283:
case 3049:
case 3725:
case 785:
case 19:
case 3907:
case 3079:
case 2319:
case 297:
case 2156:
case 605:
case 3357:
case 3497:
case 1646:
case 2182:
case 2192:
case 482:
case 1969:
case 3037:
case 3487:
case 2558:
case 1577:
case 325:
case 2599:
case 7:
case 816:
case 2418:
case 3402:
case 346:
case 185:
case 3769:
case 3640:
case 1111:
case 2107:
case 3027:
case 844:
case 2040:
case 2901:
case 1917:
case 1279:
case 2798:
case 2788:
case 1728:
case 1697:
case 973:
case 3218:
case 3205:
case 981:
case 2184:
case 226:
case 2202:
case 435:
case 449:
case 1124:
case 2345:
case 448:
case 3342:
case 3717:
case 1160:
case 1602:
case 166:
case 685:
case 3928:
case 2297:
case 2759:
case 1805:
case 132:
case 2679:
case 1227:
case 2543:
case 88:
case 2287:
case 3915:
case 60:
case 3856:
case 1466:
case 1548:
case 4062:
case 32:
case 400:
case 2776:
case 1207:
case 2574:
case 1825:
case 3235:
case 130:
case 1362:
case 3882:
case 2813:
case 2885:
case 2232:
case 833:
case 2970:
case 2656:
case 1715:
case 1632:
case 2723:
case 644:
case 866:
case 2607:
case 1793:
case 2066:
case 1611:
case 1850:
case 3140:
case 18:
case 284:
case 832:
case 3434:
case 1104:
case 1835:
case 3225:
case 1282:
case 2260:
case 2914:
case 2510:
case 1330:
case 2684:
case 747:
case 4030:
case 1050:
case 630:
case 1371:
case 2127:
case 3007:
case 1355:
case 3666:
case 4055:
case 2234:
case 1197:
case 43:
case 1035:
case 3949:
case 3551:
case 3884:
case 2425:
case 1320:
case 68:
case 3056:
case 3336:
case 144:
case 480:
case 1284:
case 3373:
case 2085:
case 116:
case 114:
case 1027:
case 422:
case 2437:
case 1402:
case 3604:
case 265:
case 3529:
case 2479:
case 423:
case 77:
case 1195:
case 125:
case 3122:
case 1357:
case 1497:
case 2002:
case 206:
case 4044:
case 1113:
case 2846:
case 3300:
case 717:
case 491:
case 3539:
case 468:
case 3227:
case 1404:
case 2802:
case 286:
case 3805:
case 332:
case 3160:
case 2988:
case 2046:
case 366:
case 3738:
case 3602:
case 1928:
case 2903:
case 2605:
case 864:
case 646:
case 3440:
case 574:
case 2887:
case 305:
case 82:
case 457:
case 3237:
case 1342:
case 2541:
case 2959:
case 1205:
case 4042:
case 3124:
case 2897:
case 1938:
case 625:
case 3728:
case 3697:
case 3687:
case 1166:
case 3917:
case 2285:
case 2563:
case 3282:
case 1807:
case 1094:
case 38:
case 215:
case 2811:
case 2650:
case 2976:
case 3981:
case 3793:
case 2731:
case 26:
case 3850:
case 3256:
case 3715:
case 3632:
case 3991:
case 2635:
case 990:
case 767:
case 1235:
case 330:
case 2822:
case 418:
case 224:
case 2494:
case 12:
case 3207:
case 1695:
case 2721:
case 1613:
case 2625:
case 2060:
case 1983:
case 1685:
case 3284:
case 664:
case 2118:
case 1082:
case 3025:
case 1432:
case 1373:
case 2022:
case 3553:
case 4073:
case 1092:
case 2407:
case 3294:
case 814:
case 2516:
case 4036:
case 3320:
case 3634:
case 731:
case 1575:
case 3485:
case 1551:
case 1949:
case 3035:
case 2482:
case 527:
case 1884:
case 1007:
case 1894:
case 2492:
case 30:
case 3495:
case 759:
case 2386:
case 62:
case 3905:
case 3918:
case 3688:
case 3727:
case 1545:
case 2201:
case 1217:
case 401:
case 3238:
case 253:
case 983:
case 3341:
case 2888:
case 2997:
case 1718:
case 2617:
case 667:
case 3779:
case 159:
case 158:
case 1114:
case 347:
case 982:
case 3659:
case 1838:
case 2904:
case 2059:
case 2500:
case 472:
case 1519:
case 395:
case 2181:
case 764:
case 3017:
case 4058:
case 227:
case 2428:
case 4089:
case 659:
case 72:
case 473:
case 658:
case 175:
case 949:
case 935:
case 2740:
case 481:
case 3123:
case 1028:
case 903:
case 3794:
case 1476:
case 3586:
case 3784:
case 2530:
case 3249:
case 3188:
case 1083:
case 2960:
case 2214:
case 1015:
case 506:
case 2766:
case 4072:
case 3552:
case 1093:
case 3198:
case 875:
case 3316:
case 1994:
case 565:
case 867:
case 2520:
case 1849:
case 3159:
case 1614:
case 1580:
case 2033:
case 2493:
case 2353:
case 3081:
case 2117:
case 2911:
case 1621:
case 2681:
case 1907:
case 3935:
case 3782:
case 250:
case 2562:
case 980:
case 3215:
case 1374:
case 3547:
case 831:
case 2212:
case 3676:
case 3881:
case 1361:
case 3554:
case 2169:
case 1992:
case 17:
case 1612:
case 3925:
case 3623:
case 1982:
case 3414:
case 1670:
case 1956:
case 117:
case 2823:
case 1815:
case 586:
case 858:
case 93:
case 1281:
case 2221:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756011602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,];
var gg_b = "1756011602/";

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
