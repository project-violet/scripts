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
case 515:
case 2112:
case 3869:
case 766:
case 691:
case 1500:
case 1564:
case 3482:
case 3160:
case 742:
case 3631:
case 3244:
case 1333:
case 1774:
case 1638:
case 1600:
case 816:
case 1577:
case 2032:
case 1871:
case 1462:
case 3878:
case 988:
case 3684:
case 2775:
case 1739:
case 1876:
case 2665:
case 1622:
case 87:
case 1767:
case 107:
case 2919:
case 3071:
case 2215:
case 1078:
case 3089:
case 1117:
case 871:
case 496:
case 3076:
case 1293:
case 2724:
case 387:
case 2527:
case 1069:
case 3913:
case 2467:
case 2762:
case 3257:
case 2672:
case 153:
case 2826:
case 2627:
case 2310:
case 558:
case 3710:
case 139:
case 3455:
case 192:
case 3442:
case 876:
case 3806:
case 491:
case 81:
case 2937:
case 1830:
case 1808:
case 2175:
case 3801:
case 2347:
case 1222:
case 2265:
case 913:
case 2304:
case 3670:
case 3498:
case 3760:
case 3544:
case 575:
case 2712:
case 726:
case 443:
case 717:
case 76:
case 1174:
case 1264:
case 1056:
case 901:
case 3570:
case 1496:
case 3963:
case 3644:
case 185:
case 3049:
case 3557:
case 1614:
case 1858:
case 2227:
case 1342:
case 1355:
case 3657:
case 761:
case 3819:
case 1125:
case 1514:
case 305:
case 2272:
case 696:
case 1593:
case 1717:
case 1250:
case 564:
case 1895:
case 3926:
case 3396:
case 1928:
case 2124:
case 4035:
case 554:
case 570:
case 1001:
case 811:
case 1693:
case 2354:
case 3208:
case 1146:
case 3230:
case 2103:
case 3676:
case 773:
case 3766:
case 1884:
case 1578:
case 880:
case 1201:
case 2243:
case 3689:
case 3576:
case 1768:
case 111:
case 1141:
case 3148:
case 412:
case 3864:
case 3838:
case 1569:
case 2885:
case 92:
case 325:
case 489:
case 1429:
case 3109:
case 3952:
case 3945:
case 2683:
case 3249:
case 3335:
case 252:
case 1836:
case 1669:
case 966:
case 672:
case 3192:
case 3788:
case 508:
case 1064:
case 1038:
case 378:
case 1915:
case 3473:
case 1219:
case 921:
case 2528:
case 2153:
case 2628:
case 2993:
case 2323:
case 3036:
case 706:
case 3723:
case 167:
case 2532:
case 4012:
case 1077:
case 176:
case 1022:
case 1435:
case 3111:
case 3084:
case 3902:
case 2486:
case 320:
case 2729:
case 3295:
case 3850:
case 3329:
case 11:
case 3116:
case 24:
case 3549:
case 701:
case 3709:
case 222:
case 1186:
case 3497:
case 2922:
case 1965:
case 4024:
case 917:
case 1179:
case 612:
case 3188:
case 926:
case 1181:
case 635:
case 853:
case 784:
case 1237:
case 2418:
case 2283:
case 1093:
case 3303:
case 3166:
case 1601:
case 3608:
case 2852:
case 2845:
case 3630:
case 504:
case 3530:
case 3289:
case 2964:
case 2643:
case 1807:
case 1134:
case 3985:
case 3711:
case 350:
case 630:
case 3595:
case 127:
case 116:
case 3695:
case 807:
case 1972:
case 3716:
case 360:
case 2820:
case 2359:
case 1927:
case 318:
case 3044:
case 1857:
case 2950:
case 1656:
case 2441:
case 241:
case 2190:
case 70:
case 3558:
case 1556:
case 2802:
case 7:
case 2446:
case 2228:
case 951:
case 2753:
case 3070:
case 409:
case 2461:
case 2872:
case 2626:
case 1473:
case 3915:
case 2085:
case 3000:
case 2521:
case 588:
case 183:
case 3251:
case 2294:
case 1902:
case 114:
case 800:
case 2488:
case 2213:
case 376:
case 1999:
case 932:
case 2957:
case 31:
case 357:
case 1295:
case 637:
case 120:
case 1159:
case 915:
case 708:
case 2423:
case 958:
case 1676:
case 2865:
case 1230:
case 1877:
case 1208:
case 3050:
case 248:
case 1761:
case 1671:
case 1148:
case 4042:
case 4055:
case 3734:
case 3141:
case 2368:
case 2334:
case 1576:
case 910:
case 1838:
case 2386:
case 2907:
case 1800:
case 3786:
case 1192:
case 3669:
case 1335:
case 849:
case 3779:
case 1249:
case 3637:
case 1945:
case 303:
case 1952:
case 316:
case 327:
case 2045:
case 2052:
case 1711:
case 2492:
case 3397:
case 3927:
case 975:
case 1759:
case 1007:
case 1716:
case 37:
case 1695:
case 1558:
case 3656:
case 2448:
case 118:
case 1044:
case 2226:
case 3551:
case 1070:
case 1353:
case 3651:
case 1658:
case 3403:
case 3556:
case 437:
case 2459:
case 3186:
case 1549:
case 1709:
case 2099:
case 2416:
case 3870:
case 640:
case 2002:
case 1188:
case 4082:
case 3269:
case 3965:
case 244:
case 2411:
case 3746:
case 1630:
case 1303:
case 3601:
case 2936:
case 3741:
case 1985:
case 3278:
case 928:
case 3168:
case 3606:
case 1161:
case 1530:
case 2263:
case 1508:
case 1271:
case 1748:
case 887:
case 2931:
case 715:
case 566:
case 908:
case 1089:
case 3117:
case 3078:
case 577:
case 2220:
case 1071:
case 1433:
case 799:
case 542:
case 3382:
case 556:
case 3293:
case 1154:
case 363:
case 865:
case 3214:
case 3037:
case 3475:
case 1913:
case 3069:
case 694:
case 498:
case 2142:
case 855:
case 633:
case 2325:
case 2995:
case 1362:
case 459:
case 1160:
case 3424:
case 2908:
case 818:
case 1270:
case 3740:
case 3500:
case 2021:
case 1869:
case 2340:
case 3943:
case 1536:
case 3600:
case 3638:
case 2685:
case 1244:
case 1631:
case 469:
case 2733:
case 710:
case 3889:
case 1584:
case 1878:
case 219:
case 2410:
case 3871:
case 3462:
case 2105:
case 295:
case 3577:
case 2245:
case 521:
case 2367:
case 3677:
case 2949:
case 629:
case 1375:
case 1147:
case 3622:
case 3739:
case 2339:
case 2602:
case 3858:
case 825:
case 1851:
case 1557:
case 3514:
case 3932:
case 1657:
case 1405:
case 2699:
case 3125:
case 1819:
case 981:
case 1856:
case 4073:
case 149:
case 1110:
case 1926:
case 1396:
case 3006:
case 3250:
case 55:
case 2620:
case 380:
case 517:
case 2317:
case 56:
case 433:
case 1391:
case 3693:
case 3412:
case 2520:
case 1008:
case 698:
case 2460:
case 1030:
case 2545:
case 2380:
case 2552:
case 3305:
case 1455:
case 339:
case 2843:
case 659:
case 100:
case 814:
case 1747:
case 3139:
case 669:
case 3167:
case 561:
case 3277:
case 3983:
case 3830:
case 3140:
case 2454:
case 3491:
case 1704:
case 1544:
case 3051:
case 764:
case 1498:
case 1670:
case 1963:
case 3496:
case 883:
case 1644:
case 2133:
case 1570:
case 3019:
case 2989:
case 3238:
case 2640:
case 1336:
case 1212:
case 3835:
case 2574:
case 1946:
case 3533:
case 439:
case 2764:
case 2700:
case 2385:
case 3338:
case 3300:
case 2674:
case 2738:
case 3205:
case 1029:
case 902:
case 2472:
case 2861:
case 1873:
case 4056:
case 4019:
case 2539:
case 485:
case 738:
case 1575:
case 2722:
case 1765:
case 830:
case 1384:
case 2866:
case 143:
case 2777:
case 1115:
case 3829:
case 762:
case 3431:
case 1524:
case 2068:
case 536:
case 1400:
case 1464:
case 2193:
case 423:
case 1291:
case 3436:
case 752:
case 1624:
case 2079:
case 2823:
case 1035:
case 2465:
case 2114:
case 4001:
case 653:
case 2525:
case 835:
case 333:
case 1662:
case 663:
case 3199:
case 2625:
case 3255:
case 3242:
case 3097:
case 1307:
case 3457:
case 2848:
case 20:
case 3752:
case 2018:
case 3505:
case 2345:
case 2:
case 1165:
case 2239:
case 997:
case 3803:
case 692:
case 793:
case 3966:
case 1968:
case 1512:
case 3185:
case 2415:
case 3961:
case 3314:
case 2302:
case 3555:
case 1127:
case 3799:
case 623:
case 847:
case 1262:
case 2617:
case 2320:
case 2990:
case 201:
case 398:
case 1715:
case 1696:
case 3470:
case 1596:
case 1224:
case 2046:
case 4037:
case 1003:
case 3393:
case 2811:
case 3923:
case 53:
case 463:
case 1024:
case 2246:
case 3573:
case 3904:
case 3960:
case 2428:
case 2912:
case 595:
case 2534:
case 1203:
case 221:
case 2634:
case 2106:
case 2363:
case 3673:
case 702:
case 2579:
case 2887:
case 2432:
case 896:
case 603:
case 1062:
case 1833:
case 2581:
case 147:
case 2737:
case 582:
case 4093:
case 1783:
case 3337:
case 2681:
case 2769:
case 2586:
case 2074:
case 47:
case 2810:
case 1478:
case 1917:
case 3862:
case 3033:
case 3726:
case 3194:
case 590:
case 2321:
case 3721:
case 1590:
case 2040:
case 3824:
case 2218:
case 2483:
case 277:
case 946:
case 667:
case 22:
case 1629:
case 676:
case 135:
case 3495:
case 3055:
case 3042:
case 2286:
case 4050:
case 3812:
case 2169:
case 1939:
case 1183:
case 934:
case 2541:
case 2701:
case 671:
case 1940:
case 797:
case 2847:
case 1451:
case 1308:
case 1096:
case 3273:
case 2546:
case 3163:
case 941:
case 1419:
case 2234:
case 1456:
case 1974:
case 189:
case 2178:
case 261:
case 2268:
case 2313:
case 3597:
case 226:
case 3896:
case 2080:
case 4064:
case 345:
case 627:
case 922:
case 1132:
case 616:
case 309:
case 94:
case 3697:
case 130:
case 3910:
case 1406:
case 3126:
case 3356:
case 1290:
case 1012:
case 891:
case 4077:
case 1401:
case 1358:
case 476:
case 1128:
case 3408:
case 2394:
case 2924:
case 3430:
case 3794:
case 1726:
case 268:
case 1471:
case 1862:
case 719:
case 2463:
case 3478:
case 795:
case 948:
case 3590:
case 1721:
case 2623:
case 2158:
case 2328:
case 258:
case 1194:
case 3728:
case 502:
case 620:
case 224:
case 3882:
case 137:
case 3629:
case 782:
case 3732:
case 2332:
case 2259:
case 1297:
case 859:
case 418:
case 3203:
case 2776:
case 455:
case 1875:
case 2108:
case 1082:
case 898:
case 2867:
case 3024:
case 2130:
case 1573:
case 1763:
case 2248:
case 1673:
case 3371:
case 2789:
case 465:
case 3389:
case 215:
case 3062:
case 2209:
case 3833:
case 372:
case 299:
case 2588:
case 1947:
case 625:
case 3783:
case 2149:
case 944:
case 1449:
case 4036:
case 2047:
case 1713:
case 483:
case 1910:
case 254:
case 478:
case 2511:
case 4031:
case 3229:
case 3925:
case 145:
case 597:
case 1356:
case 420:
case 931:
case 228:
case 3406:
case 3553:
case 2982:
case 2060:
case 1794:
case 2004:
case 1408:
case 1351:
case 618:
case 3401:
case 3358:
case 2758:
case 2223:
case 140:
case 312:
case 93:
case 833:
case 2609:
case 3349:
case 2509:
case 3183:
case 665:
case 1812:
case 2708:
case 2730:
case 1301:
case 1458:
case 3603:
case 2266:
case 2189:
case 2343:
case 389:
case 425:
case 2648:
case 3805:
case 3419:
case 2880:
case 3096:
case 2933:
case 2261:
case 1987:
case 405:
case 3464:
case 3438:
case 3524:
case 1431:
case 1350:
case 3115:
case 982:
case 3624:
case 286:
case 1682:
case 3291:
case 2066:
case 4049:
case 3562:
case 133:
case 3918:
case 1102:
case 4008:
case 194:
case 1484:
case 4030:
case 2510:
case 840:
case 1242:
case 3727:
case 1255:
case 748:
case 2610:
case 1199:
case 919:
case 1916:
case 2157:
case 2372:
case 3772:
case 3946:
case 1533:
case 2881:
case 546:
case 391:
case 1300:
case 1364:
case 4095:
case 1785:
case 2886:
case 1338:
case 1633:
case 3331:
case 552:
case 1948:
case 2731:
case 129:
case 3575:
case 2834:
case 2868:
case 3873:
case 1909:
case 845:
case 343:
case 1145:
case 1152:
case 1992:
case 809:
case 2784:
case 3675:
case 2247:
case 1542:
case 649:
case 1314:
case 2445:
case 2452:
case 4089:
case 2009:
case 1799:
case 731:
case 3172:
case 3357:
case 1655:
case 1642:
case 4071:
case 2210:
case 28:
case 1444:
case 3715:
case 3591:
case 593:
case 1720:
case 3897:
case 2654:
case 3691:
case 3003:
case 3224:
case 744:
case 2818:
case 837:
case 1457:
case 1605:
case 2841:
case 2547:
case 3986:
case 2059:
case 204:
case 3275:
case 159:
case 2402:
case 3979:
case 1803:
case 2846:
case 1745:
case 3981:
case 1752:
case 1966:
case 3612:
case 2136:
case 3370:
case 1233:
case 3344:
case 1961:
case 2287:
case 2744:
case 2560:
case 2131:
case 1185:
case 2420:
case 1326:
case 3463:
case 3087:
case 2917:
case 1156:
case 1810:
case 3523:
case 1040:
case 707:
case 2590:
case 1321:
case 3998:
case 2253:
case 434:
case 903:
case 2469:
case 324:
case 1067:
case 2529:
case 2882:
case 80:
case 166:
case 2732:
case 2629:
case 12:
case 8:
case 142:
case 310:
case 587:
case 1568:
case 2203:
case 1101:
case 3666:
case 2376:
case 1428:
case 3867:
case 1246:
case 2024:
case 3248:
case 3771:
case 2371:
case 3426:
case 2143:
case 3566:
case 1778:
case 315:
case 3905:
case 2833:
case 3209:
case 1025:
case 1887:
case 1432:
case 2062:
case 3010:
case 272:
case 1579:
case 957:
case 2535:
case 3588:
case 3874:
case 399:
case 3840:
case 1586:
case 967:
case 3688:
case 1769:
case 1681:
case 2783:
case 0:
case 2898:
case 1618:
case 126:
case 15:
case 3559:
case 3047:
case 1313:
case 230:
case 3659:
case 785:
case 3817:
case 3511:
case 354:
case 2132:
case 3795:
case 2229:
case 806:
case 2395:
case 2925:
case 693:
case 3616:
case 1756:
case 1443:
case 2842:
case 2406:
case 3982:
case 1924:
case 1394:
case 2653:
case 2401:
case 3223:
case 641:
case 3758:
case 97:
case 3592:
case 3609:
case 780:
case 2349:
case 888:
case 64:
case 3509:
case 1137:
case 2939:
case 927:
case 1279:
case 3692:
case 1169:
case 2235:
case 3413:
case 622:
case 3288:
case 1975:
case 3708:
case 3548:
case 500:
case 2308:
case 2451:
case 3730:
case 452:
case 3494:
case 2603:
case 3176:
case 151:
case 2091:
case 3266:
case 1541:
case 2503:
case 1017:
case 2743:
case 161:
case 1178:
case 1234:
case 2974:
case 2456:
case 2419:
case 1546:
case 3261:
case 1706:
case 2096:
case 3880:
case 1034:
case 2400:
case 1217:
case 2438:
case 3485:
case 1068:
case 2296:
case 1750:
case 2524:
case 3061:
case 2291:
case 497:
case 2477:
case 173:
case 1823:
case 578:
case 3327:
case 3997:
case 3610:
case 29:
case 188:
case 2772:
case 3881:
case 1574:
case 2212:
case 525:
case 767:
case 3879:
case 2941:
case 1385:
case 1540:
case 3886:
case 1764:
case 2331:
case 2450:
case 3144:
case 3834:
case 2575:
case 3868:
case 1427:
case 1280:
case 2873:
case 85:
case 826:
case 1861:
case 86:
case 243:
case 106:
case 1866:
case 3784:
case 963:
case 1639:
case 3092:
case 518:
case 1302:
case 3452:
case 3445:
case 1225:
case 3757:
case 697:
case 2357:
case 2172:
case 1929:
case 939:
case 3210:
case 1150:
case 3315:
case 38:
case 402:
case 1816:
case 2696:
case 2715:
case 3048:
case 550:
case 101:
case 2591:
case 3554:
case 1859:
case 1990:
case 1617:
case 2897:
case 2691:
case 1811:
case 3654:
case 2003:
case 4083:
case 2224:
case 2596:
case 866:
case 1680:
case 3016:
case 381:
case 3707:
case 3184:
case 304:
case 4028:
case 2165:
case 856:
case 1:
case 1580:
case 1352:
case 82:
case 1018:
case 1267:
case 716:
case 2612:
case 565:
case 727:
case 1240:
case 1809:
case 3131:
case 3504:
case 4032:
case 1138:
case 77:
case 3420:
case 1164:
case 1100:
case 987:
case 3903:
case 3888:
case 1204:
case 1260:
case 1170:
case 1587:
case 479:
case 108:
case 1144:
case 720:
case 1687:
case 3700:
case 3567:
case 2205:
case 3280:
case 2909:
case 3861:
case 3427:
case 778:
case 3539:
case 1834:
case 619:
case 3722:
case 854:
case 3866:
case 1365:
case 3667:
case 2145:
case 2377:
case 2152:
case 306:
case 3777:
case 2350:
case 2582:
case 2073:
case 1485:
case 3068:
case 725:
case 567:
case 51:
case 1254:
case 557:
case 2682:
case 2298:
case 186:
case 1510:
case 1088:
case 294:
case 3081:
case 373:
case 233:
case 3525:
case 388:
case 1157:
case 3625:
case 1997:
case 1610:
case 2255:
case 1547:
case 1707:
case 269:
case 1841:
case 1499:
case 2605:
case 3848:
case 2745:
case 3:
case 1846:
case 4021:
case 3177:
case 3345:
case 679:
case 1011:
case 2988:
case 810:
case 3935:
case 1604:
case 868:
case 774:
case 1770:
case 1136:
case 2966:
case 3164:
case 3100:
case 1420:
case 2185:
case 3138:
case 3274:
case 419:
case 1131:
case 1744:
case 858:
case 2961:
case 1973:
case 760:
case 3415:
case 815:
case 1445:
case 2314:
case 2853:
case 3302:
case 1092:
case 2702:
case 832:
case 2555:
case 1210:
case 2655:
case 2642:
case 3399:
case 3225:
case 900:
case 3859:
case 301:
case 3041:
case 2598:
case 1048:
case 1315:
case 2444:
case 1818:
case 755:
case 57:
case 3517:
case 2573:
case 88:
case 1561:
case 1130:
case 648:
case 4002:
case 3428:
case 1666:
case 1421:
case 3912:
case 1566:
case 507:
case 321:
case 3668:
case 1426:
case 1248:
case 1771:
case 2763:
case 1588:
case 1874:
case 3686:
case 3579:
case 920:
case 1209:
case 3887:
case 3432:
case 3581:
case 1149:
case 914:
case 1383:
case 2337:
case 1292:
case 2369:
case 787:
case 3679:
case 3156:
case 3996:
case 3326:
case 2862:
case 1825:
case 168:
case 1998:
case 2476:
case 2954:
case 4045:
case 2721:
case 237:
case 366:
case 2824:
case 377:
case 3218:
case 2113:
case 3039:
case 2297:
case 925:
case 1332:
case 32:
case 1195:
case 1609:
case 960:
case 175:
case 1592:
case 644:
case 2042:
case 448:
case 1692:
case 1288:
case 3279:
case 1749:
case 974:
case 3137:
case 3281:
case 631:
case 2458:
case 3646:
case 592:
case 1708:
case 3546:
case 886:
case 2987:
case 2273:
case 1171:
case 2306:
case 2163:
case 1648:
case 361:
case 3178:
case 1343:
case 3641:
case 3234:
case 3017:
case 1189:
case 918:
case 2891:
case 1611:
case 164:
case 2713:
case 63:
case 35:
case 3618:
case 580:
case 2896:
case 2005:
case 170:
case 154:
case 1817:
case 3719:
case 700:
case 2126:
case 128:
case 523:
case 1223:
case 1758:
case 2121:
case 3924:
case 2408:
case 2794:
case 1004:
case 1060:
case 2430:
case 1982:
case 3751:
case 808:
case 2219:
case 138:
case 2915:
case 594:
case 3626:
case 3085:
case 3827:
case 3521:
case 46:
case 2064:
case 1790:
case 2000:
case 417:
case 3466:
case 1323:
case 1993:
case 1153:
case 1628:
case 947:
case 642:
case 3213:
case 2022:
case 1065:
case 3488:
case 1532:
case 267:
case 21:
case 677:
case 666:
case 257:
case 1486:
case 2201:
case 2578:
case 2884:
case 529:
case 348:
case 2206:
case 3773:
case 1361:
case 3663:
case 3368:
case 2490:
case 3334:
case 2429:
case 897:
case 461:
case 1885:
case 162:
case 1735:
case 2836:
case 1388:
case 2637:
case 216:
case 227:
case 2718:
case 3492:
case 3613:
case 1311:
case 2927:
case 1820:
case 935:
case 1359:
case 3797:
case 27:
case 617:
case 1316:
case 626:
case 2972:
case 3815:
case 912:
case 1129:
case 141:
case 1950:
case 1899:
case 3448:
case 2857:
case 3226:
case 2519:
case 2651:
case 4067:
case 466:
case 2844:
case 14:
case 2870:
case 2014:
case 3984:
case 2269:
case 3002:
case 2179:
case 1922:
case 1392:
case 802:
case 344:
case 2506:
case 569:
case 2453:
case 796:
case 1703:
case 3936:
case 2741:
case 2134:
case 2501:
case 3341:
case 4025:
case 2168:
case 1964:
case 331:
case 1348:
case 2606:
case 3931:
case 559:
case 1015:
case 3263:
case 1956:
case 2078:
case 1215:
case 3832:
case 1196:
case 991:
case 1919:
case 2650:
case 3198:
case 3782:
case 2382:
case 2293:
case 3958:
case 413:
case 1191:
case 84:
case 263:
case 1572:
case 1467:
case 688:
case 2037:
case 1083:
case 1821:
case 822:
case 2475:
case 943:
case 2069:
case 1527:
case 390:
case 1627:
case 401:
case 253:
case 1762:
case 3299:
case 2424:
case 1028:
case 3021:
case 2500:
case 2564:
case 1901:
case 2538:
case 1906:
case 1565:
case 2889:
case 834:
case 99:
case 1863:
case 1425:
case 395:
case 606:
case 2871:
case 2767:
case 2677:
case 3367:
case 2739:
case 3339:
case 862:
case 3602:
case 223:
case 197:
case 1894:
case 3599:
case 846:
case 2932:
case 1272:
case 4034:
case 1480:
case 3699:
case 2342:
case 1227:
case 2006:
case 2717:
case 1043:
case 2412:
case 601:
case 545:
case 1813:
case 473:
case 3520:
case 1791:
case 2001:
case 1515:
case 3182:
case 3404:
case 2928:
case 3552:
case 3380:
case 6:
case 3705:
case 2780:
case 2305:
case 2139:
case 3013:
case 2222:
case 996:
case 3645:
case 60:
case 2808:
case 2983:
case 2277:
case 406:
case 2491:
case 3976:
case 2140:
case 2051:
case 3094:
case 838:
case 285:
case 3971:
case 2019:
case 2200:
case 3285:
case 1978:
case 2174:
case 737:
case 3901:
case 1585:
case 3112:
case 1021:
case 2482:
case 2837:
case 1883:
case 572:
case 1930:
case 2104:
case 2160:
case 2787:
case 1733:
case 3387:
case 2244:
case 481:
case 1685:
case 4016:
case 547:
case 3863:
case 3425:
case 195:
case 1410:
case 3565:
case 933:
case 1339:
case 3775:
case 2684:
case 2147:
case 1367:
case 1252:
case 3196:
case 3919:
case 2071:
case 1220:
case 3956:
case 2089:
case 4009:
case 3474:
case 3440:
case 2154:
case 2076:
case 2324:
case 1782:
case 4092:
case 1198:
case 3821:
case 2913:
case 1828:
case 3083:
case 2257:
case 1299:
case 1995:
case 3310:
case 1142:
case 4048:
case 3627:
case 2710:
case 48:
case 408:
case 1843:
case 2442:
case 2455:
case 1545:
case 1552:
case 2095:
case 3937:
case 1645:
case 3969:
case 2507:
case 1013:
case 2747:
case 3304:
case 1094:
case 2058:
case 535:
case 1976:
case 3417:
case 1989:
case 998:
case 2570:
case 2187:
case 709:
case 1133:
case 2644:
case 2963:
case 959:
case 3894:
case 1447:
case 1755:
case 1502:
case 249:
case 2110:
case 3162:
case 2405:
case 2819:
case 1699:
case 2657:
case 3272:
case 205:
case 1620:
case 3043:
case 2396:
case 740:
case 2030:
case 530:
case 3124:
case 848:
case 1182:
case 4088:
case 2008:
case 3791:
case 3813:
case 2391:
case 2571:
case 2877:
case 794:
case 2589:
case 2822:
case 3103:
case 733:
case 2576:
case 2689:
case 1334:
case 2148:
case 1663:
case 1944:
case 2671:
case 2761:
case 2864:
case 3885:
case 2838:
case 225:
case 3583:
case 352:
case 699:
case 937:
case 2192:
case 3434:
case 1521:
case 2390:
case 3468:
case 1085:
case 454:
case 2473:
case 1461:
case 658:
case 338:
case 729:
case 283:
case 4047:
case 3323:
case 1621:
case 3993:
case 3914:
case 3481:
case 3065:
case 1213:
case 879:
case 4060:
case 3479:
case 2111:
case 1197:
case 2159:
case 220:
case 3632:
case 3729:
case 2116:
case 2329:
case 2999:
case 265:
case 1416:
case 34:
case 1099:
case 2549:
case 322:
case 945:
case 1411:
case 144:
case 3392:
case 1984:
case 2792:
case 890:
case 3418:
case 675:
case 3543:
case 3703:
case 1936:
case 2276:
case 2166:
case 2303:
case 499:
case 2271:
case 432:
case 2508:
case 4010:
case 3348:
case 1341:
case 3643:
case 3964:
case 131:
case 2985:
case 415:
case 1020:
case 1613:
case 654:
case 819:
case 250:
case 1045:
case 393:
case 1318:
case 13:
case 940:
case 664:
case 2759:
case 3359:
case 468:
case 3820:
case 2044:
case 3950:
case 1448:
case 2123:
case 1694:
case 3753:
case 628:
case 3228:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1764140401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,];
var gg_b = "1764140401/";

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
