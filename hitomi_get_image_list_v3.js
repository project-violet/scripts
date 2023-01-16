// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
var o = 1;
switch (g) {
case 2535:
case 1301:
case 1308:
case 1519:
case 2959:
case 3133:
case 2708:
case 3720:
case 1390:
case 589:
case 4063:
case 1936:
case 1073:
case 1463:
case 2282:
case 19:
case 342:
case 1279:
case 2745:
case 1743:
case 2695:
case 452:
case 2480:
case 1874:
case 892:
case 2184:
case 545:
case 504:
case 216:
case 230:
case 1404:
case 1216:
case 1633:
case 3106:
case 3150:
case 4058:
case 3847:
case 2982:
case 457:
case 694:
case 2600:
case 1867:
case 1058:
case 3134:
case 2212:
case 3387:
case 2249:
case 3562:
case 4081:
case 2014:
case 2059:
case 2598:
case 687:
case 1251:
case 3813:
case 523:
case 1589:
case 1728:
case 527:
case 3241:
case 1870:
case 1851:
case 1583:
case 1669:
case 1055:
case 3616:
case 3527:
case 874:
case 1207:
case 3506:
case 1229:
case 2904:
case 1613:
case 2717:
case 2217:
case 4024:
case 598:
case 1284:
case 3411:
case 1622:
case 3052:
case 1545:
case 1771:
case 4012:
case 3110:
case 2741:
case 2340:
case 3877:
case 1083:
case 3223:
case 3617:
case 3715:
case 3712:
case 4062:
case 3148:
case 893:
case 3737:
case 3213:
case 943:
case 319:
case 2965:
case 3356:
case 2625:
case 468:
case 364:
case 4053:
case 2853:
case 1680:
case 3455:
case 1133:
case 557:
case 1656:
case 2678:
case 1084:
case 269:
case 3383:
case 1448:
case 3497:
case 1983:
case 3042:
case 4046:
case 3556:
case 2513:
case 2100:
case 992:
case 1117:
case 3045:
case 3002:
case 912:
case 3287:
case 1946:
case 887:
case 2549:
case 1620:
case 2270:
case 1270:
case 13:
case 2825:
case 2451:
case 1818:
case 3030:
case 516:
case 3749:
case 257:
case 3714:
case 1799:
case 424:
case 1486:
case 218:
case 398:
case 535:
case 2408:
case 607:
case 1741:
case 541:
case 3525:
case 2855:
case 3974:
case 1195:
case 2262:
case 3597:
case 1660:
case 1510:
case 3063:
case 2119:
case 2076:
case 2714:
case 1998:
case 42:
case 520:
case 2406:
case 148:
case 2800:
case 3632:
case 132:
case 1178:
case 2269:
case 1726:
case 1893:
case 96:
case 335:
case 2735:
case 163:
case 2024:
case 4060:
case 2947:
case 677:
case 3143:
case 3600:
case 243:
case 2364:
case 3964:
case 2942:
case 3667:
case 1693:
case 273:
case 138:
case 39:
case 1723:
case 3389:
case 478:
case 3057:
case 1128:
case 3705:
case 1312:
case 1255:
case 2114:
case 3953:
case 3590:
case 2880:
case 259:
case 707:
case 2424:
case 1352:
case 1745:
case 3113:
case 22:
case 3732:
case 3774:
case 1898:
case 212:
case 513:
case 1952:
case 2083:
case 993:
case 3413:
case 3437:
case 3828:
case 481:
case 2082:
case 2203:
case 1588:
case 425:
case 651:
case 1974:
case 3461:
case 789:
case 831:
case 2978:
case 3324:
case 3612:
case 681:
case 3674:
case 3789:
case 509:
case 2832:
case 1937:
case 360:
case 2834:
case 304:
case 1480:
case 3235:
case 595:
case 3520:
case 2347:
case 1984:
case 2644:
case 2711:
case 965:
case 1222:
case 396:
case 1601:
case 3077:
case 1099:
case 1122:
case 3048:
case 1249:
case 3434:
case 3104:
case 554:
case 3004:
case 1423:
case 1655:
case 1647:
case 921:
case 116:
case 1659:
case 356:
case 910:
case 3416:
case 2153:
case 252:
case 868:
case 11:
case 3522:
case 3203:
case 3493:
case 4025:
case 2077:
case 2995:
case 1283:
case 1811:
case 553:
case 2195:
case 1306:
case 1615:
case 1188:
case 2447:
case 190:
case 3645:
case 3233:
case 675:
case 1126:
case 413:
case 2514:
case 2939:
case 3044:
case 2595:
case 448:
case 592:
case 1789:
case 1106:
case 1038:
case 277:
case 1705:
case 3363:
case 620:
case 2989:
case 1643:
case 830:
case 2914:
case 3766:
case 2971:
case 3222:
case 435:
case 2139:
case 714:
case 1033:
case 2792:
case 2524:
case 1848:
case 3016:
case 2684:
case 638:
case 281:
case 71:
case 656:
case 2485:
case 1863:
case 462:
case 4051:
case 290:
case 1025:
case 2652:
case 2288:
case 377:
case 3977:
case 1402:
case 1311:
case 2824:
case 1734:
case 440:
case 1814:
case 3410:
case 3230:
case 1632:
case 1955:
case 309:
case 1794:
case 475:
case 1186:
case 2030:
case 2332:
case 2453:
case 395:
case 619:
case 505:
case 3068:
case 2518:
case 3514:
case 3447:
case 1764:
case 3621:
case 1170:
case 3043:
case 28:
case 1637:
case 2237:
case 2029:
case 1051:
case 1085:
case 3108:
case 3395:
case 153:
case 2356:
case 1899:
case 3406:
case 3912:
case 3573:
case 2716:
case 256:
case 2512:
case 3739:
case 3933:
case 1354:
case 1379:
case 861:
case 1678:
case 1966:
case 3960:
case 1849:
case 684:
case 705:
case 532:
case 136:
case 1829:
case 3456:
case 3697:
case 49:
case 3418:
case 1401:
case 637:
case 3583:
case 1101:
case 1710:
case 3430:
case 730:
case 3159:
case 878:
case 907:
case 1189:
case 3589:
case 3228:
case 207:
case 1909:
case 154:
case 584:
case 3809:
case 2799:
case 2554:
case 3685:
case 1603:
case 795:
case 1437:
case 633:
case 3772:
case 2576:
case 2111:
case 2838:
case 853:
case 3540:
case 2187:
case 806:
case 3985:
case 412:
case 3688:
case 2808:
case 1277:
case 1295:
case 2193:
case 2125:
case 754:
case 369:
case 1175:
case 3120:
case 2072:
case 1977:
case 2296:
case 3340:
case 1676:
case 3215:
case 869:
case 51:
case 3182:
case 3226:
case 1528:
case 3308:
case 944:
case 1324:
case 36:
case 2200:
case 1091:
case 3657:
case 4085:
case 1862:
case 415:
case 1709:
case 957:
case 3054:
case 669:
case 1072:
case 91:
case 2822:
case 626:
case 859:
case 2367:
case 913:
case 496:
case 3135:
case 184:
case 3872:
case 2366:
case 755:
case 4006:
case 1895:
case 3726:
case 2879:
case 3528:
case 1962:
case 389:
case 940:
case 1704:
case 2442:
case 3643:
case 659:
case 1332:
case 771:
case 3354:
case 1959:
case 2877:
case 1227:
case 565:
case 4045:
case 1889:
case 4069:
case 2844:
case 2454:
case 507:
case 2464:
case 2783:
case 3026:
case 3948:
case 3472:
case 1777:
case 3548:
case 1151:
case 2611:
case 3377:
case 2318:
case 3403:
case 1875:
case 414:
case 1866:
case 889:
case 3471:
case 3015:
case 3326:
case 2394:
case 1965:
case 3967:
case 1021:
case 3557:
case 127:
case 3916:
case 3719:
case 1489:
case 2352:
case 176:
case 2878:
case 4021:
case 473:
case 1876:
case 3623:
case 747:
case 3936:
case 956:
case 1677:
case 794:
case 1934:
case 1991:
case 229:
case 2121:
case 533:
case 1574:
case 3775:
case 2423:
case 1318:
case 2328:
case 783:
case 1013:
case 3269:
case 1261:
case 3212:
case 2326:
case 1336:
case 2350:
case 1618:
case 3245:
case 3205:
case 1289:
case 3459:
case 1474:
case 3680:
case 720:
case 1664:
case 56:
case 978:
case 1376:
case 1361:
case 3179:
case 2362:
case 1492:
case 2645:
case 3483:
case 3577:
case 3629:
case 2734:
case 2911:
case 3112:
case 361:
case 3433:
case 731:
case 3584:
case 3614:
case 1607:
case 2907:
case 3918:
case 26:
case 573:
case 1802:
case 3171:
case 2519:
case 2381:
case 1409:
case 355:
case 482:
case 996:
case 3020:
case 455:
case 1266:
case 2351:
case 477:
case 3530:
case 546:
case 3988:
case 2677:
case 1264:
case 3140:
case 2164:
case 18:
case 223:
case 3776:
case 591:
case 3603:
case 1030:
case 324:
case 4023:
case 1657:
case 3740:
case 1502:
case 3746:
case 2186:
case 1582:
case 2413:
case 3224:
case 1176:
case 1611:
case 624:
case 3588:
case 1226:
case 2610:
case 575:
case 1751:
case 2390:
case 905:
case 3942:
case 1941:
case 3624:
case 2530:
case 268:
case 2697:
case 3615:
case 2876:
case 1157:
case 469:
case 1254:
case 2525:
case 2730:
case 1767:
case 64:
case 2272:
case 3450:
case 1821:
case 3132:
case 1828:
case 2564:
case 3812:
case 1066:
case 3824:
case 442:
case 2120:
case 1907:
case 1112:
case 1979:
case 991:
case 3443:
case 2894:
case 1220:
case 1353:
case 2724:
case 666:
case 2636:
case 2744:
case 2089:
case 790:
case 3871:
case 2141:
case 3175:
case 982:
case 594:
case 3524:
case 1008:
case 3199:
case 3186:
case 1093:
case 1432:
case 2236:
case 15:
case 3341:
case 3292:
case 1569:
case 1831:
case 3466:
case 390:
case 1340:
case 879:
case 263:
case 5:
case 1671:
case 112:
case 3564:
case 3790:
case 901:
case 994:
case 3453:
case 2786:
case 1028:
case 506:
case 1192:
case 3118:
case 3856:
case 974:
case 2916:
case 605:
case 1639:
case 2444:
case 1823:
case 2232:
case 1366:
case 1830:
case 3217:
case 260:
case 550:
case 3062:
case 2344:
case 2589:
case 3973:
case 1805:
case 2223:
case 1755:
case 2483:
case 1698:
case 3927:
case 89:
case 1196:
case 1132:
case 983:
case 2292:
case 3117:
case 1285:
case 1070:
case 251:
case 2225:
case 2365:
case 397:
case 3473:
case 2410:
case 2575:
case 699:
case 770:
case 517:
case 1302:
case 1534:
case 3139:
case 2946:
case 632:
case 3545:
case 3636:
case 1992:
case 3207:
case 1819:
case 3891:
case 3607:
case 1182:
case 137:
case 1839:
case 2898:
case 2371:
case 3055:
case 233:
case 450:
case 3613:
case 3690:
case 813:
case 2803:
case 4000:
case 679:
case 2363:
case 2102:
case 2:
case 2704:
case 2661:
case 3671:
case 2960:
case 3137:
case 3234:
case 1532:
case 3981:
case 2330:
case 3581:
case 814:
case 3290:
case 317:
case 3499:
case 322:
case 1019:
case 657:
case 1913:
case 847:
case 662:
case 1420:
case 100:
case 644:
case 3788:
case 1597:
case 914:
case 1961:
case 655:
case 2865:
case 1939:
case 387:
case 316:
case 3826:
case 3191:
case 3511:
case 3408:
case 3266:
case 2909:
case 758:
case 1953:
case 2932:
case 3804:
case 58:
case 834:
case 812:
case 722:
case 2478:
case 2171:
case 1461:
case 1766:
case 745:
case 1742:
case 737:
case 173:
case 1155:
case 406:
case 1035:
case 1566:
case 1665:
case 3795:
case 2872:
case 2871:
case 3532:
case 3650:
case 2915:
case 340:
case 3468:
case 2118:
case 643:
case 653:
case 3130:
case 3983:
case 1720:
case 1599:
case 1071:
case 2509:
case 3771:
case 1653:
case 3832:
case 785:
case 3412:
case 1517:
case 1208:
case 3058:
case 2290:
case 2835:
case 1392:
case 2506:
case 381:
case 92:
case 3538:
case 2779:
case 3626:
case 936:
case 2191:
case 1730:
case 3718:
case 1935:
case 180:
case 2829:
case 4028:
case 1537:
case 772:
case 2762:
case 945:
case 1047:
case 1691:
case 1775:
case 3604:
case 1716:
case 511:
case 1914:
case 3822:
case 693:
case 1593:
case 2515:
case 3886:
case 1964:
case 782:
case 3662:
case 2012:
case 2830:
case 841:
case 2662:
case 2220:
case 664:
case 769:
case 4075:
case 3560:
case 1662:
case 2046:
case 1395:
case 585:
case 2103:
case 140:
case 1765:
case 2758:
case 2508:
case 849:
case 3012:
case 3484:
case 4080:
case 2837:
case 778:
case 1371:
case 1211:
case 2593:
case 1096:
case 1173:
case 2520:
case 2092:
case 382:
case 1550:
case 2847:
case 3480:
case 12:
case 166:
case 3898:
case 2725:
case 1718:
case 1564:
case 767:
case 3655:
case 3196:
case 1234:
case 3844:
case 3986:
case 947:
case 2170:
case 3438:
case 3805:
case 1791:
case 235:
case 526:
case 4049:
case 3666:
case 2776:
case 2784:
case 1187:
case 561:
case 1069:
case 3242:
case 961:
case 855:
case 2875:
case 8:
case 3316:
case 38:
case 3576:
case 732:
case 3939:
case 1721:
case 938:
case 1598:
case 678:
case 1384:
case 2703:
case 1527:
case 2642:
case 3664:
case 3178:
case 3028:
case 3553:
case 1800:
case 1004:
case 2051:
case 3751:
case 3968:
case 3628:
case 959:
case 1431:
case 1389:
case 2609:
case 2687:
case 1884:
case 103:
case 1296:
case 1786:
case 2172:
case 3921:
case 2631:
case 1378:
case 3883:
case 2494:
case 1635:
case 3731:
case 837:
case 3660:
case 2293:
case 2434:
case 3452:
case 115:
case 3823:
case 2977:
case 3035:
case 2450:
case 1472:
case 3422:
case 2286:
case 2476:
case 896:
case 872:
case 2393:
case 3431:
case 987:
case 1687:
case 597:
case 123:
case 3761:
case 1177:
case 811:
case 2099:
case 2565:
case 4017:
case 314:
case 2766:
case 2148:
case 500:
case 1739:
case 1629:
case 3305:
case 485:
case 1617:
case 3304:
case 976:
case 3491:
case 1370:
case 2127:
case 1062:
case 40:
case 4086:
case 3904:
case 2027:
case 4027:
case 1325:
case 1131:
case 1369:
case 696:
case 1046:
case 1243:
case 2736:
case 1032:
case 3519:
case 1319:
case 191:
case 3995:
case 998:
case 955:
case 2259:
case 2007:
case 1247:
case 2529:
case 1981:
case 3503:
case 353:
case 3602:
case 352:
case 3954:
case 1165:
case 3401:
case 3303:
case 2510:
case 3922:
case 2968:
case 2849:
case 1228:
case 1883:
case 3702:
case 1257:
case 2180:
case 3420:
case 1012:
case 2268:
case 1910:
case 1158:
case 846:
case 3358:
case 1539:
case 428:
case 27:
case 2923:
case 1267:
case 3100:
case 719:
case 4026:
case 1218:
case 1087:
case 3216:
case 950:
case 652:
case 1271:
case 2178:
case 3320:
case 2129:
case 400:
case 1397:
case 220:
case 1902:
case 1773:
case 1153:
case 2228:
case 2540:
case 3558:
case 3925:
case 1648:
case 1406:
case 895:
case 1930:
case 3220:
case 2656:
case 2581:
case 725:
case 3467:
case 1572:
case 2487:
case 1522:
case 1673:
case 832:
case 3979:
case 3293:
case 10:
case 76:
case 1337:
case 471:
case 2133:
case 3878:
case 492:
case 563:
case 2175:
case 3344:
case 866:
case 2106:
case 1833:
case 3634:
case 2353:
case 2043:
case 1179:
case 2138:
case 1838:
case 3505:
case 864:
case 3070:
case 1197:
case 2664:
case 79:
case 2902:
case 1088:
case 183:
case 4071:
case 4040:
case 3371:
case 3884:
case 367:
case 1513:
case 3727:
case 2675:
case 2385:
case 1135:
case 3355:
case 3200:
case 735:
case 3314:
case 3869:
case 3099:
case 1879:
case 1944:
case 3949:
case 588:
case 2427:
case 3398:
case 126:
case 3736:
case 1162:
case 158:
case 3835:
case 2980:
case 2883:
case 2860:
case 3708:
case 187:
case 178:
case 3151:
case 2718:
case 3518:
case 3347:
case 82:
case 1749:
case 2457:
case 3283:
case 1350:
case 3990:
case 3279:
case 300:
case 3237:
case 2460:
case 3258:
case 2746:
case 2772:
case 1804:
case 2862:
case 65:
case 815:
case 1806:
case 2850:
case 70:
case 3759:
case 3448:
case 1212:
case 3907:
case 2685:
case 3971:
case 1006:
case 2807:
case 779:
case 2737:
case 1005:
case 4054:
case 2997:
case 189:
case 2411:
case 2511:
case 2754:
case 3289:
case 962:
case 3753:
case 2815:
case 1736:
case 2238:
case 1022:
case 2005:
case 1627:
case 2692:
case 1241:
case 1001:
case 2752:
case 2868:
case 3244:
case 1758:
case 2523:
case 1438:
case 3642:
case 3310:
case 3792:
case 734:
case 623:
case 3860:
case 2966:
case 3475:
case 3717:
case 2336:
case 799:
case 88:
case 3741:
case 927:
case 1428:
case 3691:
case 3798:
case 2814:
case 1342:
case 2582:
case 245:
case 3097:
case 3011:
case 351:
case 1442:
case 3270:
case 165:
case 2218:
case 1505:
case 185:
case 2775:
case 3257:
case 1604:
case 1560:
case 822:
case 4029:
case 2781:
case 1756:
case 3568:
case 3830:
case 2819:
case 2345:
case 2013:
case 989:
case 867:
case 501:
case 1349:
case 2696:
case 3202:
case 1314:
case 3781:
case 2526:
case 674:
case 329:
case 33:
case 1315:
case 1796:
case 4070:
case 817:
case 616:
case 3550:
case 3701:
case 358:
case 4076:
case 1002:
case 2471:
case 2462:
case 2749:
case 1925:
case 3594:
case 3166:
case 2813:
case 1381:
case 1713:
case 1400:
case 2321:
case 2064:
case 4031:
case 3231:
case 580:
case 890:
case 2608:
case 95:
case 493:
case 1788:
case 3193:
case 2701:
case 2507:
case 175:
case 1645:
case 3744:
case 1683:
case 764:
case 2235:
case 1469:
case 4003:
case 1940:
case 253:
case 303:
case 4037:
case 2492:
case 2747:
case 1628:
case 519:
case 1036:
case 568:
case 924:
case 3121:
case 3075:
case 2278:
case 1067:
case 34:
case 3359:
case 1688:
case 4016:
case 2944:
case 3243:
case 3868:
case 4077:
case 3025:
case 160:
case 3037:
case 941:
case 7:
case 162:
case 1258:
case 2751:
case 3185:
case 2104:
case 1837:
case 3610:
case 1183:
case 2542:
case 209:
case 3421:
case 1090:
case 1701:
case 2578:
case 2183:
case 470:
case 2123:
case 2194:
case 402:
case 1553:
case 3622:
case 1307:
case 3348:
case 3247:
case 318:
case 1807:
case 3338:
case 1149:
case 458:
case 701:
case 1770:
case 915:
case 472:
case 2820:
case 4092:
case 1393:
case 3105:
case 1317:
case 2008:
case 2101:
case 3515:
case 3409:
case 2110:
case 1592:
case 2924:
case 3876:
case 948:
case 844:
case 321:
case 3080:
case 1039:
case 1609:
case 1652:
case 3307:
case 3659:
case 931:
case 2150:
case 3778:
case 3748:
case 2061:
case 2607:
case 1097:
case 3552:
case 3146:
case 1487:
case 54:
case 2415:
case 1259:
case 3661:
case 3469:
case 3214:
case 2131:
case 297:
case 3109:
case 3500:
case 1916:
case 436:
case 226:
case 3853:
case 3797:
case 336:
case 1454:
case 641:
case 1235:
case 261:
case 3126:
case 3017:
case 3285:
case 2863:
case 670:
case 1924:
case 3762:
case 3419:
case 1209:
case 460:
case 2174:
case 1594:
case 774:
case 1457:
case 935:
case 1531:
case 2851:
case 3695:
case 385:
case 1760:
case 3014:
case 2168:
case 2019:
case 733:
case 1339:
case 692:
case 2370:
case 2275:
case 118:
case 3232:
case 883:
case 1328:
case 121:
case 2774:
case 3092:
case 234:
case 3902:
case 2690:
case 3236:
case 2425:
case 3405:
case 1561:
case 1467:
case 2028:
case 2840:
case 2870:
case 1185:
case 2245:
case 1331:
case 2583:
case 3842:
case 4038:
case 2592:
case 2721:
case 1206:
case 1050:
case 3315:
case 237:
case 1661:
case 711:
case 1590:
case 1779:
case 1887:
case 2419:
case 1725:
case 3837:
case 3198:
case 1702:
case 1049:
case 1242:
case 4035:
case 1735:
case 3641:
case 1812:
case 1733:
case 1956:
case 3385:
case 2018:
case 3640:
case 4039:
case 3889:
case 909:
case 2649:
case 59:
case 3033:
case 4091:
case 826:
case 650:
case 1368:
case 2848:
case 69:
case 2917:
case 2357:
case 2463:
case 2022:
case 3313:
case 1997:
case 3649:
case 1063:
case 1273:
case 3563:
case 2906:
case 2893:
case 2299:
case 3087:
case 990:
case 2486:
case 1089:
case 642:
case 581:
case 2173:
case 2614:
case 2726:
case 1761:
case 3678:
case 600:
case 3476:
case 1000:
case 366:
case 3696:
case 1690:
case 2224:
case 1840:
case 3510:
case 1972:
case 2197:
case 4042:
case 1477:
case 3083:
case 1994:
case 152:
case 2040:
case 2331:
case 2498:
case 1871:
case 2797:
case 3825:
case 1375:
case 2655:
case 3330:
case 3342:
case 3635:
case 1040:
case 1018:
case 3425:
case 3670:
case 1413:
case 2435:
case 2311:
case 3041:
case 2594:
case 1445:
case 689:
case 4095:
case 2349:
case 1606:
case 2151:
case 2192:
case 265:
case 2763:
case 393:
case 3923:
case 1355:
case 29:
case 671:
case 199:
case 3544:
case 1567:
case 6:
case 241:
case 1580:
case 3820:
case 2112:
case 1345:
case 2179:
case 2248:
case 3089:
case 3079:
case 1444:
case 680:
case 1215:
case 3494:
case 2945:
case 3653:
case 1411:
case 979:
case 53:
case 922:
case 2213:
case 2252:
case 2098:
case 1822:
case 916:
case 1497:
case 2990:
case 2397:
case 3940:
case 2383:
case 1929:
case 2648:
case 407:
case 2934:
case 77:
case 3879:
case 4074:
case 3881:
case 3312:
case 1310:
case 1649:
case 2152:
case 1120:
case 2382:
case 1191:
case 3188:
case 3742:
case 836:
case 3388:
case 228:
case 1107:
case 72:
case 908:
case 857:
case 2146:
case 3546:
case 3958:
case 3072:
case 977:
case 2291:
case 3173:
case 1727:
case 3957:
case 2713:
case 2591:
case 1440:
case 1918:
case 44:
case 1542:
case 2221:
case 3081:
case 2958:
case 3208:
case 3073:
case 552:
case 1456:
case 3857:
case 1797:
case 3386:
case 3255:
case 1313:
case 1253:
case 1948:
case 647:
case 3246:
case 3337:
case 3299:
case 2323:
case 3357:
case 2002:
case 1610:
case 3682:
case 456:
case 2616:
case 2836:
case 3164:
case 104:
case 3414:
case 2375:
case 2892:
case 738:
case 2532:
case 969:
case 1880:
case 2770:
case 391:
case 3021:
case 2287:
case 2257:
case 1919:
case 1061:
case 1865:
case 963:
case 1334:
case 3501:
case 1388:
case 2389:
case 2534:
case 788:
case 247:
case 134:
case 2303:
case 3119:
case 1557:
case 3210:
case 347:
case 1714:
case 149:
case 980:
case 408:
case 3638:
case 2058:
case 3153:
case 1199:
case 3619:
case 3286:
case 147:
case 3339:
case 2646:
case 2778:
case 2504:
case 2640:
case 2334:
case 1843:
case 897:
case 202:
case 2647:
case 114:
case 2994:
case 201:
case 3187:
case 1333:
case 3959:
case 3432:
case 1933:
case 2665:
case 231:
case 2919:
case 825:
case 1738:
case 2086:
case 2497:
case 2790:
case 2241:
case 1223:
case 3022:
case 906:
case 599:
case 805:
case 1563:
case 1152:
case 2289:
case 1252:
case 2009:
case 1608:
case 3489:
case 2162:
case 858:
case 3555:
case 3488:
case 330:
case 311:
case 2300:
case 796:
case 3449:
case 150:
case 1947:
case 3464:
case 1052:
case 2496:
case 24:
case 2361:
case 2901:
case 2926:
case 4050:
case 1078:
case 1347:
case 1500:
case 1416:
case 3373:
case 1276:
case 2075:
case 2055:
case 2325:
case 3184:
case 2387:
case 262:
case 823:
case 1600:
case 3539:
case 2991:
case 2615:
case 3174:
case 920:
case 1858:
case 1523:
case 186:
case 2166:
case 572:
case 3703:
case 2874:
case 2556:
case 2996:
case 2010:
case 1433:
case 860:
case 2246:
case 2962:
case 610:
case 3005:
case 404:
case 3947:
case 1882:
case 193:
case 225:
case 2143:
case 1092:
case 757:
case 1989:
case 2422:
case 2743:
case 2155:
case 1394:
case 2376:
case 1511:
case 1923:
case 3115:
case 1546:
case 3474:
case 1139:
case 50:
case 2632:
case 740:
case 577:
case 547:
case 840:
case 1468:
case 3944:
case 3989:
case 1817:
case 1232:
case 3946:
case 2791:
case 703:
case 224:
case 1143:
case 3384:
case 1832:
case 75:
case 2843:
case 3593:
case 205:
case 2905:
case 2688:
case 3093:
case 3982:
case 1768:
case 155:
case 151:
case 1614:
case 576:
case 1417:
case 2420:
case 1854:
case 904:
case 902:
case 1422:
case 2065:
case 1113:
case 4001:
case 3537:
case 1011:
case 1407:
case 2842:
case 2719:
case 2738:
case 2974:
case 2517:
case 648:
case 3722:
case 1410:
case 1834:
case 2900:
case 2552:
case 762:
case 2921:
case 3345:
case 25:
case 343:
case 2650:
case 2765:
case 1398:
case 578:
case 3498:
case 776:
case 2795:
case 1732:
case 2402:
case 1466:
case 2222:
case 2137:
case 1970:
case 289:
case 2658:
case 286:
case 1641:
case 1634:
case 2247:
case 2189:
case 780:
case 94:
case 446:
case 2750:
case 2214:
case 242:
case 120:
case 294:
case 310:
case 3502:
case 1102:
case 3201:
case 1927:
case 3477:
case 542:
case 3426:
case 629:
case 2032:
case 2881:
case 2136:
case 888:
case 3264:
case 2204:
case 3585:
case 399:
case 551:
case 3297:
case 487:
case 3374:
case 4041:
case 2190:
case 249:
case 2163:
case 3267:
case 1586:
case 1640:
case 2777:
case 338:
case 1781:
case 21:
case 4078:
case 1163:
case 3976:
case 3786:
case 1160:
case 2761:
case 2034:
case 320:
case 2895:
case 3379:
case 1351:
case 704:
case 2574:
case 1303:
case 2970:
case 3351:
case 2020:
case 3394:
case 2085:
case 3462:
case 3710:
case 3937:
case 2788:
case 1190:
case 2113:
case 3928:
case 1147:
case 2426:
case 1938:
case 833:
case 1717:
case 3704:
case 2502:
case 1346:
case 2355:
case 2016:
case 2298:
case 312:
case 2314:
case 23:
case 975:
case 1988:
case 2555:
case 1320:
case 1127:
case 1684:
case 3966:
case 522:
case 1358:
case 1482:
case 2563:
case 1847:
case 2050:
case 3181:
case 2867:
case 1526:
case 2568:
case 3848:
case 1068:
case 1792:
case 850:
case 1670:
case 3393:
case 4090:
case 540:
case 489:
case 1075:
case 2253:
case 422:
case 1140:
case 2263:
case 1536:
case 797:
case 3:
case 1478:
case 227:
case 1150:
case 3646:
case 2063:
case 986:
case 1146:
case 3910:
case 2134:
case 3034:
case 80:
case 1503:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1673830802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,];
var gg_b = "1673830802/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
