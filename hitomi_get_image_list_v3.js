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
case 2916:
case 2292:
case 680:
case 3481:
case 849:
case 3203:
case 3672:
case 4000:
case 3326:
case 1972:
case 2245:
case 285:
case 2686:
case 2658:
case 2130:
case 541:
case 2644:
case 3502:
case 1803:
case 3632:
case 1309:
case 3608:
case 380:
case 1257:
case 3566:
case 748:
case 1597:
case 1932:
case 4085:
case 2030:
case 3829:
case 430:
case 1917:
case 3987:
case 3617:
case 3074:
case 2818:
case 3377:
case 2700:
case 4048:
case 2913:
case 17:
case 132:
case 716:
case 451:
case 4054:
case 2785:
case 1862:
case 908:
case 1415:
case 3563:
case 3161:
case 1398:
case 1999:
case 3750:
case 706:
case 1940:
case 2288:
case 3337:
case 1806:
case 1737:
case 3824:
case 2580:
case 3041:
case 874:
case 2234:
case 3242:
case 3056:
case 3925:
case 3798:
case 3088:
case 672:
case 4068:
case 1625:
case 3295:
case 865:
case 2675:
case 2315:
case 3433:
case 3139:
case 372:
case 1842:
case 3694:
case 3188:
case 154:
case 3179:
case 2505:
case 2773:
case 3039:
case 105:
case 1514:
case 755:
case 3468:
case 1107:
case 1870:
case 2736:
case 589:
case 1891:
case 2501:
case 115:
case 4073:
case 1726:
case 1304:
case 944:
case 2311:
case 3782:
case 828:
case 3459:
case 3153:
case 3291:
case 3546:
case 4027:
case 2435:
case 3202:
case 2151:
case 870:
case 1889:
case 2146:
case 1878:
case 693:
case 2923:
case 338:
case 3238:
case 131:
case 1557:
case 710:
case 3627:
case 3460:
case 1973:
case 262:
case 3494:
case 2592:
case 393:
case 3289:
case 3775:
case 2937:
case 845:
case 2475:
case 452:
case 3101:
case 3503:
case 1802:
case 2046:
case 3633:
case 289:
case 2698:
case 3897:
case 163:
case 700:
case 1838:
case 150:
case 3278:
case 82:
case 975:
case 1976:
case 807:
case 3105:
case 1147:
case 2579:
case 3659:
case 3771:
case 2926:
case 4094:
case 1529:
case 4060:
case 3263:
case 2682:
case 813:
case 2912:
case 2296:
case 3790:
case 542:
case 3080:
case 3316:
case 126:
case 1959:
case 1358:
case 1386:
case 3676:
case 2556:
case 1863:
case 3731:
case 1344:
case 817:
case 3005:
case 2155:
case 2609:
case 488:
case 2539:
case 1369:
case 2431:
case 1936:
case 1968:
case 1110:
case 3506:
case 3668:
case 3636:
case 3180:
case 2043:
case 3654:
case 2574:
case 74:
case 533:
case 2810:
case 2708:
case 3769:
case 2205:
case 1855:
case 882:
case 2732:
case 791:
case 1954:
case 2163:
case 2561:
case 2469:
case 3096:
case 3758:
case 1349:
case 1716:
case 1390:
case 1843:
case 537:
case 2534:
case 561:
case 3542:
case 2772:
case 3681:
case 384:
case 3648:
case 3472:
case 4032:
case 1028:
case 434:
case 3570:
case 2166:
case 3814:
case 119:
case 1884:
case 2102:
case 2799:
case 3251:
case 4008:
case 3499:
case 671:
case 3685:
case 3193:
case 927:
case 1615:
case 1128:
case 241:
case 725:
case 1214:
case 585:
case 759:
case 2717:
case 1846:
case 2002:
case 2565:
case 1335:
case 923:
case 91:
case 2201:
case 3152:
case 404:
case 1328:
case 1929:
case 2526:
case 2979:
case 3817:
case 2618:
case 545:
case 1451:
case 2025:
case 2956:
case 1559:
case 1135:
case 2941:
case 2883:
case 93:
case 2512:
case 1568:
case 3287:
case 2366:
case 228:
case 139:
case 1701:
case 2213:
case 1035:
case 1175:
case 3840:
case 3906:
case 3393:
case 3657:
case 1443:
case 2858:
case 1208:
case 357:
case 265:
case 1527:
case 1164:
case 1573:
case 1171:
case 660:
case 274:
case 1957:
case 1031:
case 653:
case 1705:
case 1049:
case 644:
case 2410:
case 52:
case 2537:
case 353:
case 1090:
case 1780:
case 2992:
case 190:
case 657:
case 2363:
case 1533:
case 1131:
case 2844:
case 842:
case 1455:
case 429:
case 46:
case 1144:
case 3515:
case 2355:
case 3221:
case 1691:
case 1670:
case 3380:
case 3767:
case 2467:
case 898:
case 346:
case 2620:
case 3305:
case 3930:
case 1044:
case 3122:
case 833:
case 2871:
case 25:
case 4019:
case 2864:
case 3116:
case 722:
case 582:
case 2875:
case 1083:
case 1402:
case 618:
case 3013:
case 1825:
case 2087:
case 2961:
case 1466:
case 1438:
case 1554:
case 379:
case 308:
case 3624:
case 249:
case 3497:
case 1581:
case 3942:
case 1695:
case 1489:
case 3225:
case 679:
case 3419:
case 3511:
case 2346:
case 1548:
case 2835:
case 2187:
case 111:
case 3894:
case 3860:
case 3995:
case 1642:
case 730:
case 1236:
case 1268:
case 3876:
case 258:
case 135:
case 1430:
case 2513:
case 666:
case 1470:
case 3720:
case 1004:
case 2667:
case 3345:
case 491:
case 2420:
case 3868:
case 468:
case 1259:
case 44:
case 3392:
case 2212:
case 2996:
case 1599:
case 4024:
case 1050:
case 3827:
case 3356:
case 1678:
case 3989:
case 2237:
case 1442:
case 55:
case 323:
case 1318:
case 1495:
case 1689:
case 60:
case 2015:
case 1572:
case 3873:
case 459:
case 1150:
case 183:
case 2306:
case 2724:
case 2898:
case 576:
case 269:
case 3697:
case 2362:
case 1532:
case 61:
case 3833:
case 1602:
case 3938:
case 623:
case 1462:
case 3885:
case 1815:
case 3984:
case 400:
case 3614:
case 3077:
case 1198:
case 102:
case 3137:
case 213:
case 2395:
case 574:
case 1285:
case 3123:
case 3718:
case 1098:
case 112:
case 736:
case 2342:
case 3334:
case 565:
case 3525:
case 3211:
case 675:
case 1248:
case 1403:
case 986:
case 862:
case 1109:
case 1745:
case 3955:
case 270:
case 2610:
case 3854:
case 788:
case 528:
case 2647:
case 364:
case 1182:
case 1811:
case 3943:
case 640:
case 1009:
case 3126:
case 2804:
case 581:
case 1560:
case 375:
case 1594:
case 4029:
case 2905:
case 194:
case 2757:
case 374:
case 463:
case 195:
case 3121:
case 1653:
case 1405:
case 152:
case 3953:
case 702:
case 2657:
case 3577:
case 1816:
case 3858:
case 365:
case 3844:
case 2832:
case 467:
case 431:
case 1692:
case 83:
case 260:
case 1286:
case 1258:
case 253:
case 3992:
case 3607:
case 1645:
case 1480:
case 2396:
case 2903:
case 1582:
case 1751:
case 3883:
case 3988:
case 1679:
case 1918:
case 628:
case 1319:
case 1688:
case 188:
case 2817:
case 381:
case 3618:
case 4047:
case 1639:
case 681:
case 2840:
case 2393:
case 2899:
case 3302:
case 2962:
case 3714:
case 540:
case 121:
case 3939:
case 3338:
case 2624:
case 349:
case 1766:
case 3087:
case 3961:
case 3797:
case 735:
case 279:
case 1017:
case 566:
case 1702:
case 1199:
case 3974:
case 933:
case 2728:
case 1504:
case 998:
case 3187:
case 424:
case 3719:
case 1:
case 3346:
case 3835:
case 1275:
case 796:
case 2225:
case 2942:
case 2419:
case 3934:
case 2511:
case 2113:
case 50:
case 3467:
case 2016:
case 1264:
case 246:
case 2380:
case 1496:
case 2991:
case 1072:
case 409:
case 478:
case 2221:
case 1132:
case 65:
case 1763:
case 1920:
case 51:
case 3965:
case 3864:
case 3343:
case 783:
case 1008:
case 1172:
case 1032:
case 4028:
case 2305:
case 134:
case 1665:
case 985:
case 669:
case 1928:
case 1085:
case 2873:
case 2978:
case 2379:
case 3522:
case 1586:
case 2356:
case 3237:
case 1558:
case 2989:
case 1434:
case 3516:
case 2341:
case 3952:
case 3628:
case 1742:
case 1569:
case 3115:
case 1461:
case 3223:
case 1693:
case 1544:
case 682:
case 2424:
case 884:
case 1837:
case 227:
case 3306:
case 1474:
case 1148:
case 456:
case 1181:
case 1812:
case 2587:
case 1357:
case 151:
case 358:
case 701:
case 47:
case 432:
case 3303:
case 3212:
case 1791:
case 1967:
case 1081:
case 658:
case 2392:
case 3667:
case 130:
case 508:
case 2345:
case 2868:
case 2963:
case 1154:
case 711:
case 1696:
case 2854:
case 3370:
case 1168:
case 454:
case 1136:
case 2955:
case 3980:
case 3391:
case 1575:
case 2012:
case 447:
case 1059:
case 645:
case 1492:
case 275:
case 3757:
case 893:
case 3804:
case 2126:
case 345:
case 443:
case 2881:
case 1605:
case 3647:
case 1159:
case 670:
case 1706:
case 3850:
case 2614:
case 2077:
case 560:
case 2374:
case 3901:
case 1531:
case 2361:
case 989:
case 2984:
case 1456:
case 557:
case 3418:
case 18:
case 1127:
case 2718:
case 2800:
case 2177:
case 317:
case 2215:
case 2123:
case 2521:
case 3729:
case 962:
case 607:
case 790:
case 2134:
case 1327:
case 3913:
case 1983:
case 3142:
case 2617:
case 2206:
case 168:
case 1888:
case 2074:
case 3818:
case 496:
case 361:
case 4004:
case 2323:
case 398:
case 633:
case 191:
case 846:
case 2061:
case 724:
case 584:
case 2034:
case 698:
case 333:
case 3596:
case 2485:
case 1715:
case 949:
case 3095:
case 3785:
case 3279:
case 2640:
case 3922:
case 1616:
case 3686:
case 3404:
case 2578:
case 2326:
case 1528:
case 571:
case 3070:
case 3091:
case 95:
case 2203:
case 2448:
case 483:
case 2589:
case 1958:
case 1359:
case 808:
case 2481:
case 159:
case 3754:
case 3170:
case 3807:
case 1845:
case 1336:
case 3593:
case 685:
case 1892:
case 2065:
case 2502:
case 3253:
case 2632:
case 818:
case 3501:
case 3631:
case 2709:
case 2053:
case 731:
case 1931:
case 2436:
case 2468:
case 3003:
case 402:
case 1412:
case 2291:
case 965:
case 1949:
case 2546:
case 1865:
case 3311:
case 2092:
case 597:
case 2459:
case 2551:
case 3671:
case 538:
case 3664:
case 1220:
case 1971:
case 2921:
case 3649:
case 1157:
case 1029:
case 3675:
case 2555:
case 642:
case 494:
case 2433:
case 3733:
case 1861:
case 3162:
case 857:
case 2295:
case 3234:
case 2242:
case 586:
case 2088:
case 4009:
case 2824:
case 3106:
case 1510:
case 844:
case 2041:
case 3580:
case 860:
case 3773:
case 853:
case 1547:
case 981:
case 2473:
case 4082:
case 1300:
case 1935:
case 2427:
case 2694:
case 2660:
case 177:
case 2156:
case 2188:
case 272:
case 2543:
case 23:
case 3727:
case 3490:
case 2749:
case 2316:
case 572:
case 743:
case 53:
case 3912:
case 2790:
case 3449:
case 1982:
case 4035:
case 3143:
case 2080:
case 3541:
case 3055:
case 439:
case 2771:
case 3682:
case 114:
case 1721:
case 3471:
case 2659:
case 2105:
case 4075:
case 1308:
case 1909:
case 2668:
case 2636:
case 2180:
case 747:
case 286:
case 3043:
case 3609:
case 3539:
case 970:
case 2731:
case 754:
case 2627:
case 3828:
case 362:
case 2494:
case 129:
case 3084:
case 238:
case 1317:
case 3760:
case 1677:
case 2238:
case 297:
case 3293:
case 840:
case 2001:
case 4064:
case 4090:
case 3146:
case 2819:
case 917:
case 3977:
case 2202:
case 2313:
case 903:
case 192:
case 3545:
case 4031:
case 1637:
case 3184:
case 389:
case 715:
case 1399:
case 1725:
case 1998:
case 2503:
case 92:
case 907:
case 3592:
case 3937:
case 1340:
case 2289:
case 1893:
case 1950:
case 2052:
case 969:
case 1019:
case 3325:
case 2440:
case 641:
case 3799:
case 3089:
case 1520:
case 2814:
case 3078:
case 3138:
case 2783:
case 4058:
case 0:
case 3201:
case 4086:
case 2093:
case 866:
case 39:
case 3002:
case 1119:
case 1787:
case 2600:
case 271:
case 3178:
case 2530:
case 3717:
case 2284:
case 2417:
case 341:
case 3038:
case 3163:
case 3561:
case 2744:
case 411:
case 2432:
case 116:
case 732:
case 77:
case 3574:
case 2654:
case 2408:
case 3847:
case 284:
case 3063:
case 2472:
case 401:
case 1422:
case 2595:
case 2911:
case 2542:
case 3458:
case 756:
case 3604:
case 2096:
case 2758:
case 1210:
case 2786:
case 3280:
case 2742:
case 776:
case 3734:
case 3050:
case 2100:
case 3318:
case 123:
case 3678:
case 2558:
case 1356:
case 909:
case 2823:
case 683:
case 3495:
case 2085:
case 1873:
case 4030:
case 534:
case 2795:
case 2928:
case 3233:
case 3572:
case 2652:
case 127:
case 2837:
case 3508:
case 3638:
case 3666:
case 2000:
case 1697:
case 1424:
case 3774:
case 3602:
case 3761:
case 919:
case 1833:
case 2544:
case 3532:
case 3273:
case 299:
case 2185:
case 485:
case 1339:
case 806:
case 1966:
case 2461:
case 1938:
case 2569:
case 3517:
case 335:
case 1876:
case 251:
case 2357:
case 3236:
case 3268:
case 3104:
case 2465:
case 2583:
case 4042:
case 2148:
case 2696:
case 1720:
case 3307:
case 2770:
case 230:
case 461:
case 86:
case 3540:
case 2081:
case 2791:
case 2967:
case 437:
case 3599:
case 3663:
case 2282:
case 2048:
case 1211:
case 1525:
case 2059:
case 2575:
case 3655:
case 3109:
case 3403:
case 694:
case 3792:
case 892:
case 1955:
case 2168:
case 3745:
case 2680:
case 3320:
case 2204:
case 781:
case 140:
case 164:
case 1365:
case 1848:
case 2605:
case 2159:
case 1881:
case 1112:
case 1943:
case 3811:
case 3182:
case 3254:
case 2068:
case 3643:
case 2947:
case 3594:
case 3560:
case 2176:
case 3739:
case 950:
case 3815:
case 2073:
case 774:
case 2439:
case 2133:
case 2531:
case 1374:
case 3406:
case 536:
case 1077:
case 765:
case 1614:
case 2027:
case 2324:
case 4003:
case 595:
case 2479:
case 1521:
case 931:
case 3779:
case 3646:
case 2033:
case 1177:
case 804:
case 28:
case 2564:
case 1334:
case 1951:
case 1037:
case 707:
case 690:
case 1657:
case 2743:
case 3164:
case 4046:
case 3527:
case 252:
case 713:
case 1872:
case 2244:
case 144:
case 2405:
case 3573:
case 489:
case 1747:
case 3705:
case 295:
case 3031:
case 2269:
case 1396:
case 717:
case 3049:
case 3780:
case 3090:
case 153:
case 1710:
case 2286:
case 2907:
case 2755:
case 3603:
case 3455:
case 877:
case 1832:
case 3533:
case 3131:
case 905:
case 3272:
case 3929:
case 2641:
case 770:
case 288:
case 2656:
case 2194:
case 954:
case 2688:
case 4043:
case 2746:
case 3240:
case 1629:
case 810:
case 3075:
case 2751:
case 1352:
case 3446:
case 639:
case 221:
case 1414:
case 1287:
case 3568:
case 2397:
case 1962:
case 339:
case 3035:
case 3662:
case 3701:
case 943:
case 800:
case 1393:
case 2401:
case 1840:
case 2639:
case 3402:
case 3924:
case 611:
case 2493:
case 3825:
case 2702:
case 179:
case 2674:
case 3554:
case 3438:
case 301:
case 530:
case 3294:
case 1511:
case 3489:
case 3695:
case 825:
case 3183:
case 859:
case 2275:
case 2:
case 1860:
case 2117:
case 1894:
case 2634:
case 2504:
case 1995:
case 3478:
case 4066:
case 2920:
case 868:
case 599:
case 3463:
case 3310:
case 1380:
case 522:
case 4002:
case 2290:
case 146:
case 920:
case 3044:
case 2665:
case 1305:
case 3347:
case 3069:
case 2231:
case 1116:
case 769:
case 3630:
case 1659:
case 994:
case 1105:
case 3147:
case 214:
case 2372:
case 2612:
case 577:
case 1080:
case 1790:
case 2982:
case 1676:
case 3386:
case 3959:
case 2518:
case 326:
case 1005:
case 1731:
case 3863:
case 204:
case 3968:
case 88:
case 3369:
case 186:
case 1180:
case 2909:
case 3110:
case 2896:
case 573:
case 1202:
case 650:
case 2014:
case 2677:
case 138:
case 255:
case 2317:
case 367:
case 3878:
case 3973:
case 229:
case 4021:
case 1627:
case 2893:
case 631:
case 1775:
case 3425:
case 902:
case 193:
case 667:
case 1633:
case 1101:
case 2998:
case 2114:
case 1897:
case 2228:
case 1278:
case 3838:
case 3866:
case 474:
case 363:
case 1814:
case 2197:
case 785:
case 525:
case 1251:
case 1440:
case 851:
case 2019:
case 45:
case 1052:
case 1246:
case 2950:
case 983:
case 3375:
case 26:
case 1284:
case 1417:
case 3128:
case 2360:
case 378:
case 2394:
case 1530:
case 2097:
case 1600:
case 171:
case 3900:
case 2119:
case 3713:
case 1152:
case 1408:
case 761:
case 1196:
case 996:
case 3855:
case 324:
case 1769:
case 3331:
case 1744:
case 3954:
case 3948:
case 624:
case 1786:
case 899:
case 1096:
case 3981:
case 54:
case 3067:
case 733:
case 3843:
case 206:
case 3364:
case 3390:
case 1595:
case 3371:
case 1681:
case 2422:
case 3611:
case 935:
case 1648:
case 184:
case 822:
case 1255:
case 1262:
case 2373:
case 1829:
case 1323:
case 3917:
case 2879:
case 3687:
case 1377:
case 1206:
case 2024:
case 332:
case 37:
case 458:
case 1563:
case 632:
case 1485:
case 3398:
case 3806:
case 3940:
case 356:
case 2986:
case 2958:
case 1589:
case 3519:
case 2622:
case 1448:
case 2711:
case 469:
case 1704:
case 56:
case 2207:
case 3020:
case 548:
case 482:
case 3803:
case 1065:
case 620:
case 1566:
case 3257:
case 225:
case 741:
case 2944:
case 8:
case 4015:
case 3120:
case 3597:
case 2931:
case 1468:
case 2354:
case 305:
case 1230:
case 3107:
case 1145:
case 762:
case 888:
case 1921:
case 200:
case 3007:
case 555:
case 2381:
case 1153:
case 407:
case 1459:
case 2964:
case 2990:
case 42:
case 592:
case 2865:
case 2949:
case 2412:
case 2510:
case 654:
case 2975:
case 2874:
case 1088:
case 1242:
case 2437:
case 895:
case 3018:
case 1295:
case 445:
case 1079:
case 647:
case 504:
case 852:
case 2477:
case 13:
case 1543:
case 172:
case 3224:
case 1156:
case 1427:
case 3118:
case 3960:
case 1473:
case 3994:
case 3723:
case 643:
case 2129:
case 2973:
case 162:
case 1828:
case 2297:
case 3014:
case 3677:
case 1146:
case 453:
case 2889:
case 460:
case 392:
case 1553:
case 98:
case 3852:
case 2927:
case 2838:
case 3114:
case 2933:
case 1698:
case 1252:
case 894:
case 1046:
case 3725:
case 3998:
case 3399:
case 3893:
case 655:
case 1592:
case 2959:
case 2358:
case 3518:
case 547:
case 1143:
case 3626:
case 2010:
case 1682:
case 802:
case 1926:
case 1055:
case 2976:
case 314:
case 3896:
case 73:
case 1867:
case 2968:
case 1609:
case 2047:
case 2331:
case 1163:
case 2954:
case 887:
case 1732:
case 2167:
case 316:
case 3880:
case 556:
case 1574:
case 1063:
case 3805:
case 1847:
case 616:
case 1321:
case 408:
case 479:
case 3904:
case 3422:
case 883:
case 1604:
case 2981:
case 1486:
case 1458:
case 2067:
case 1534:
case 2364:
case 3416:
case 4013:
case 532:
case 2349:
case 1280:
case 2948:
case 2716:
case 57:
case 2615:
case 2375:
case 3801:
case 835:
case 66:
case 1325:
case 648:
case 1102:
case 922:
case 1078:
case 2884:
case 1650:
case 1166:
case 2985:
case 19:
case 4016:
case 1201:
case 1189:
case 3413:
case 3119:
case 1565:
case 1002:
case 278:
case 1178:
case 3787:
case 896:
case 4022:
case 1038:
case 141:
case 36:
case 2214:
case 2487:
case 348:
case 1130:
case 934:
case 185:
case 3616:
case 2972:
case 3528:
case 659:
case 2382:
case 3711:
case 3853:
case 3986:
case 3359:
case 3958:
case 40:
case 625:
case 1292:
case 359:
case 1030:
case 771:
case 3944:
case 2597:
case 3845:
case 325:
case 2309:
case 1191:
case 2803:
case 1253:
case 1644:
case 3024:
case 27:
case 3327:
case 3841:
case 1818:
case 9:
case 3888:
case 368:
case 3856:
case 137:
case 466:
case 198:
case 3879:
case 1683:
case 1195:
case 3613:
case 1256:
case 3567:
case 133:
case 256:
case 1241:
case 1596:
case 2862:
case 64:
case 1785:
case 3839:
case 1315:
case 3029:
case 475:
case 2625:
case 1733:
case 3437:
case 243:
case 2018:
case 1580:
case 2350:
case 3510:
case 1106:
case 2737:
case 1498:
case 1261:
case 1773:
case 440:
case 2723:
case 3547:
case 4026:
case 254:
case 988:
case 2224:
case 142:
case 2777:
case 3935:
case 1727:
case 890:
case 2842:
case 1006:
case 786:
case 1631:
case 1501:
case 1736:
case 2107:
case 2870:
case 3931:
case 550:
case 1820:
case 563:
case 3865:
case 610:
case 3348:
case 3412:
case 1003:
case 839:
case 1759:
case 1671:
case 4077:
case 3990:
case 1311:
case 952:
case 4023:
case 2726:
case 3971:
case 1649:
case 995:
case 3426:
case 1776:
case 215:
case 3209:
case 2765:
case 3148:
case 1882:
case 1513:
case 3812:
case 3583:
case 511:
case 2430:
case 2104:
case 3730:
case 2517:
case 351:
case 3357:
case 2236:
case 2268:
case 708:
case 2599:
case 809:
case 1996:
case 3282:
case 3048:
case 296:
case 1011:
case 2259:
case 1809:
case 3081:
case 4074:
case 3967:
case 916:
case 3791:
case 1420:
case 330:
case 1667:
case 1226:
case 3154:
case 3085:
case 3795:
case 3329:
case 622:
case 2233:
case 2572:
case 3652:
case 1015:
case 1522:
case 2495:
case 2689:
case 3877:
case 2318:
case 3434:
case 746:
case 3298:
case 182:
case 699:
case 3693:
case 3461:
case 1115:
case 3569:
case 2761:
case 2997:
case 322:
case 2774:
case 1898:
case 3474:
case 1724:
case 1993:
case 2508:
case 3837:
case 1277:
case 113:
case 1850:
case 3324:
case 3706:
case 202:
case 1901:
case 107:
case 4092:
case 757:
case 3762:
case 2914:
case 826:
case 590:
case 744:
case 3073:
case 2462:
case 760:
case 103:
case 3590:
case 2741:
case 1418:
case 3488:
case 753:
case 1342:
case 212:
case 3456:
case 2788:
case 4053:
case 117:
case 2098:
case 3441:
case 2285:
case 2779:
case 2646:
case 3033:
case 929:
case 3173:
case 1729:
case 1395:
case 2320:
case 904:
case 3204:
case 170:
case 1610:
case 3168:
case 3680:
case 1370:
case 2109:
case 2403:
case 3910:
case 2082:
case 3492:
case 43:
case 867:
case 3703:
case 3059:
case 3947:
case 1905:
case 1804:
case 3036:
case 3068:
case 2753:
case 4056:
case 2182:
case 863:
case 2811:
case 3535:
case 3453:
case 1647:
case 3751:
case 1883:
case 486:
case 3746:
case 2240:
case 2559:
case 1988:
case 2451:
case 1956:
case 1025:
case 805:
case 1618:
case 2887:
case 3194:
case 2576:
case 388:
case 3656:
case 1378:
case 1526:
case 688:
case 2701:
case 2662:
case 815:
case 1125:
case 3094:
case 239:
case 2484:
case 2217:
case 128:
case 1338:
case 1366:
case 1939:
case 636:
case 2705:
case 2031:
case 3269:
case 3244:
case 3405:
case 3653:
case 2171:
case 2527:
case 1953:
case 1886:
case 2208:
case 493:
case 512:
case 3816:
case 2603:
case 2455:
case 2131:
case 1844:
case 2272:
case 1869:
case 1945:
case 3692:
case 3907:
case 910:
case 3755:
case 1607:
case 3645:
case 695:
case 2090:
case 1537:
case 3286:
case 502:
case 3480:
case 854:
case 2049:
case 4093:
case 2796:
case 2058:
case 1467:
case 583:
case 3108:
case 3496:
case 2310:
case 3550:
case 3249:
case 176:
case 2691:
case 3072:
case 925:
case 1831:
case 2144:
case 3920:
case 3271:
case 3132:
case 1965:
case 4052:
case 2500:
case 2158:
case 2630:
case 70:
case 1343:
case 15:
case 1864:
case 3172:
case 3231:
case 856:
case 2347:
case 3032:
case 2821:
case 3766:
case 2294:
case 6:
case 2260:
case 3017:
case 3674:
case 2554:
case 1384:
case 1797:
case 2466:
case 2438:
case 1087:
case 1974:
case 3199:
case 3661:
case 3702:
case 3235:
case 2793:
case 3140:
case 3504:
case 766:
case 991:
case 211:
case 3789:
case 94:
case 2548:
case 968:
case 3452:
case 1835:
case 3:
case 1934:
case 3040:
case 1351:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746349201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,];
var gg_b = "1746349201/";

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
