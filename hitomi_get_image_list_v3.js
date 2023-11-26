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
case 1206:
case 730:
case 1603:
case 1692:
case 3101:
case 712:
case 3963:
case 3798:
case 2417:
case 4079:
case 1459:
case 2175:
case 2508:
case 288:
case 3533:
case 3914:
case 1127:
case 2663:
case 2643:
case 2662:
case 1748:
case 3750:
case 2371:
case 1729:
case 1361:
case 3686:
case 1909:
case 3051:
case 3157:
case 1865:
case 1013:
case 2973:
case 1807:
case 371:
case 2047:
case 841:
case 3115:
case 557:
case 590:
case 1766:
case 2949:
case 2855:
case 1556:
case 1562:
case 3356:
case 3486:
case 190:
case 4038:
case 2365:
case 2129:
case 2636:
case 336:
case 2689:
case 3286:
case 990:
case 963:
case 3481:
case 1485:
case 2831:
case 3976:
case 3421:
case 1020:
case 1460:
case 229:
case 1875:
case 3955:
case 3296:
case 2020:
case 2712:
case 3073:
case 3290:
case 2919:
case 3074:
case 2523:
case 1380:
case 2693:
case 625:
case 342:
case 1896:
case 1161:
case 1544:
case 2339:
case 1706:
case 1205:
case 3143:
case 1462:
case 1884:
case 3553:
case 2584:
case 2985:
case 3304:
case 1337:
case 468:
case 2805:
case 3154:
case 819:
case 3464:
case 3462:
case 3417:
case 487:
case 3488:
case 1035:
case 779:
case 2637:
case 2470:
case 3475:
case 3200:
case 3301:
case 997:
case 2982:
case 1735:
case 1421:
case 3175:
case 2170:
case 3385:
case 1696:
case 3817:
case 3586:
case 3741:
case 1250:
case 749:
case 2163:
case 3121:
case 2425:
case 427:
case 1573:
case 3059:
case 3322:
case 277:
case 865:
case 3384:
case 1113:
case 3315:
case 475:
case 743:
case 1838:
case 3052:
case 2878:
case 2620:
case 459:
case 156:
case 407:
case 1372:
case 2358:
case 3437:
case 1415:
case 164:
case 1061:
case 2471:
case 2702:
case 2966:
case 2610:
case 4053:
case 2735:
case 3678:
case 1224:
case 1163:
case 2496:
case 3522:
case 3264:
case 443:
case 927:
case 1765:
case 2:
case 693:
case 3664:
case 3890:
case 3952:
case 3733:
case 2605:
case 1031:
case 1893:
case 2154:
case 1504:
case 1738:
case 1255:
case 2240:
case 3530:
case 1118:
case 347:
case 2681:
case 605:
case 67:
case 1961:
case 2832:
case 148:
case 837:
case 79:
case 1788:
case 500:
case 1313:
case 4:
case 2846:
case 3002:
case 664:
case 959:
case 3654:
case 878:
case 2969:
case 2369:
case 624:
case 53:
case 3783:
case 2038:
case 3856:
case 3910:
case 2742:
case 912:
case 1062:
case 3259:
case 3862:
case 3106:
case 2216:
case 924:
case 1347:
case 1700:
case 2658:
case 2537:
case 1199:
case 680:
case 1682:
case 678:
case 3641:
case 2028:
case 1057:
case 649:
case 433:
case 270:
case 3013:
case 2304:
case 3699:
case 210:
case 211:
case 3649:
case 1213:
case 2718:
case 2534:
case 1082:
case 2056:
case 2091:
case 235:
case 2879:
case 2782:
case 4020:
case 1529:
case 854:
case 283:
case 1189:
case 1946:
case 2227:
case 3592:
case 2475:
case 4076:
case 3659:
case 3274:
case 3554:
case 3832:
case 1684:
case 1777:
case 2675:
case 436:
case 509:
case 3854:
case 1611:
case 2101:
case 2232:
case 3819:
case 1975:
case 1183:
case 3148:
case 3505:
case 570:
case 889:
case 2871:
case 1974:
case 2533:
case 1010:
case 1947:
case 3325:
case 395:
case 3075:
case 1:
case 1251:
case 1059:
case 453:
case 1340:
case 184:
case 2208:
case 2009:
case 3846:
case 1414:
case 1585:
case 2645:
case 979:
case 643:
case 987:
case 3600:
case 2281:
case 3169:
case 1289:
case 3081:
case 1923:
case 2187:
case 1616:
case 2145:
case 1701:
case 1358:
case 5:
case 667:
case 2959:
case 659:
case 1648:
case 1195:
case 360:
case 2624:
case 40:
case 2806:
case 3086:
case 577:
case 2248:
case 291:
case 2809:
case 3961:
case 1121:
case 3138:
case 985:
case 2152:
case 2005:
case 2778:
case 238:
case 1475:
case 1649:
case 3035:
case 1271:
case 1615:
case 1101:
case 2010:
case 3570:
case 525:
case 2136:
case 3312:
case 1924:
case 772:
case 787:
case 3617:
case 2692:
case 287:
case 764:
case 2135:
case 3988:
case 4086:
case 1379:
case 473:
case 1719:
case 2076:
case 2699:
case 545:
case 2080:
case 4073:
case 1331:
case 3981:
case 1713:
case 3119:
case 182:
case 648:
case 1555:
case 3830:
case 3710:
case 167:
case 4087:
case 2095:
case 465:
case 1060:
case 3190:
case 1818:
case 480:
case 3288:
case 2786:
case 1294:
case 791:
case 1872:
case 4064:
case 3295:
case 1557:
case 3383:
case 3210:
case 2243:
case 3065:
case 2711:
case 2740:
case 533:
case 1707:
case 2171:
case 3428:
case 1029:
case 1384:
case 2192:
case 1241:
case 2927:
case 3891:
case 4034:
case 1000:
case 2777:
case 2981:
case 2970:
case 349:
case 3815:
case 3080:
case 225:
case 317:
case 3580:
case 3564:
case 3008:
case 2700:
case 10:
case 3853:
case 2042:
case 823:
case 2182:
case 734:
case 1705:
case 2606:
case 3416:
case 323:
case 2506:
case 1228:
case 2772:
case 2203:
case 2561:
case 1533:
case 63:
case 3583:
case 3851:
case 2905:
case 3161:
case 361:
case 1244:
case 2126:
case 2142:
case 757:
case 2050:
case 1730:
case 1141:
case 194:
case 4055:
case 3242:
case 1954:
case 162:
case 1197:
case 3919:
case 3473:
case 140:
case 2331:
case 656:
case 252:
case 1499:
case 3740:
case 1704:
case 1216:
case 165:
case 988:
case 420:
case 3270:
case 1184:
case 1883:
case 973:
case 2199:
case 3782:
case 2983:
case 1165:
case 2253:
case 3901:
case 3467:
case 2713:
case 47:
case 654:
case 1034:
case 1402:
case 2498:
case 1295:
case 3498:
case 3821:
case 141:
case 3839:
case 3496:
case 259:
case 12:
case 3380:
case 2366:
case 2321:
case 2627:
case 253:
case 2939:
case 761:
case 2556:
case 3820:
case 3672:
case 489:
case 89:
case 2964:
case 1086:
case 275:
case 2324:
case 2578:
case 1943:
case 273:
case 2684:
case 1265:
case 3320:
case 3878:
case 1639:
case 1093:
case 967:
case 2639:
case 1187:
case 2118:
case 3785:
case 1709:
case 110:
case 2751:
case 2376:
case 920:
case 2947:
case 3682:
case 547:
case 2239:
case 523:
case 1680:
case 2296:
case 3490:
case 1953:
case 3179:
case 3574:
case 2579:
case 3024:
case 2381:
case 3446:
case 543:
case 341:
case 2448:
case 1041:
case 1321:
case 2209:
case 1437:
case 1014:
case 3005:
case 608:
case 303:
case 3959:
case 3063:
case 890:
case 2288:
case 3479:
case 1955:
case 2196:
case 1032:
case 449:
case 1230:
case 3030:
case 2550:
case 639:
case 3163:
case 424:
case 3623:
case 609:
case 1235:
case 2736:
case 3873:
case 2246:
case 2638:
case 2922:
case 1857:
case 759:
case 1787:
case 1888:
case 3228:
case 299:
case 3759:
case 3977:
case 3548:
case 3293:
case 3224:
case 1088:
case 574:
case 3010:
case 3311:
case 2141:
case 658:
case 660:
case 478:
case 3283:
case 3791:
case 3807:
case 2634:
case 355:
case 1593:
case 169:
case 3763:
case 607:
case 2604:
case 1660:
case 3811:
case 1620:
case 2146:
case 511:
case 1577:
case 2807:
case 3316:
case 1759:
case 1794:
case 1385:
case 2734:
case 3447:
case 4021:
case 3189:
case 1534:
case 2521:
case 3646:
case 2704:
case 249:
case 657:
case 1065:
case 3393:
case 2993:
case 1885:
case 380:
case 1677:
case 839:
case 3946:
case 3943:
case 1296:
case 1526:
case 354:
case 263:
case 2472:
case 2974:
case 3377:
case 719:
case 1172:
case 873:
case 3640:
case 3595:
case 1599:
case 731:
case 1304:
case 2847:
case 1096:
case 3397:
case 3037:
case 1921:
case 745:
case 947:
case 1791:
case 1405:
case 1657:
case 2466:
case 3091:
case 1091:
case 1417:
case 792:
case 2542:
case 1990:
case 1732:
case 3186:
case 2094:
case 1822:
case 72:
case 155:
case 765:
case 219:
case 1112:
case 855:
case 3531:
case 2821:
case 2576:
case 3566:
case 1201:
case 2817:
case 3715:
case 1996:
case 2373:
case 1979:
case 2581:
case 2059:
case 653:
case 1509:
case 147:
case 3256:
case 441:
case 34:
case 2799:
case 3029:
case 2857:
case 3317:
case 3794:
case 1673:
case 1215:
case 3340:
case 720:
case 723:
case 324:
case 3539:
case 3618:
case 496:
case 3332:
case 1004:
case 144:
case 532:
case 2784:
case 519:
case 3218:
case 2827:
case 2543:
case 1528:
case 4095:
case 1436:
case 1110:
case 702:
case 482:
case 3528:
case 1781:
case 1956:
case 24:
case 3099:
case 50:
case 1963:
case 597:
case 3593:
case 1653:
case 2189:
case 2183:
case 950:
case 301:
case 236:
case 1753:
case 137:
case 733:
case 3499:
case 4014:
case 25:
case 742:
case 1434:
case 2942:
case 2516:
case 1159:
case 2318:
case 1494:
case 3164:
case 1362:
case 3671:
case 3043:
case 3596:
case 4010:
case 2476:
case 2842:
case 886:
case 410:
case 593:
case 934:
case 3947:
case 2780:
case 2030:
case 2794:
case 1836:
case 1566:
case 956:
case 3624:
case 419:
case 1910:
case 3729:
case 3180:
case 1812:
case 2747:
case 2027:
case 3989:
case 495:
case 1548:
case 2408:
case 628:
case 697:
case 2131:
case 1774:
case 3045:
case 2926:
case 3572:
case 2771:
case 1418:
case 3375:
case 2814:
case 3978:
case 3575:
case 2337:
case 2822:
case 3581:
case 1476:
case 3845:
case 1257:
case 1047:
case 811:
case 1056:
case 1510:
case 2306:
case 2099:
case 1831:
case 39:
case 3108:
case 2741:
case 3918:
case 2727:
case 2668:
case 3141:
case 3278:
case 69:
case 1858:
case 3635:
case 1724:
case 2551:
case 3621:
case 564:
case 1258:
case 3725:
case 1008:
case 3167:
case 3476:
case 1519:
case 2001:
case 1239:
case 1763:
case 1901:
case 3631:
case 21:
case 637:
case 661:
case 3326:
case 331:
case 1364:
case 3405:
case 1797:
case 2162:
case 1085:
case 3130:
case 128:
case 2074:
case 630:
case 670:
case 2644:
case 387:
case 1155:
case 1815:
case 3585:
case 1256:
case 1914:
case 186:
case 3485:
case 3998:
case 1688:
case 4051:
case 1471:
case 3208:
case 31:
case 3360:
case 4004:
case 3314:
case 2754:
case 1001:
case 571:
case 3433:
case 3033:
case 2451:
case 3770:
case 1551:
case 1185:
case 2571:
case 3136:
case 1019:
case 2677:
case 529:
case 1723:
case 1398:
case 888:
case 1895:
case 3404:
case 2277:
case 2768:
case 799:
case 1652:
case 2013:
case 4072:
case 3907:
case 1931:
case 2843:
case 699:
case 2160:
case 666:
case 2043:
case 2844:
case 2231:
case 2991:
case 4057:
case 2329:
case 2051:
case 1276:
case 603:
case 2773:
case 2220:
case 3636:
case 16:
case 3900:
case 2568:
case 2104:
case 2206:
case 552:
case 3177:
case 2789:
case 1806:
case 2045:
case 2607:
case 3775:
case 178:
case 773:
case 3769:
case 381:
case 737:
case 3879:
case 1628:
case 705:
case 2880:
case 3443:
case 1135:
case 673:
case 1450:
case 1911:
case 104:
case 3127:
case 3971:
case 3207:
case 2776:
case 826:
case 152:
case 3755:
case 1930:
case 1484:
case 1824:
case 2242:
case 4007:
case 1274:
case 3903:
case 3204:
case 3396:
case 3151:
case 494:
case 3870:
case 2488:
case 3849:
case 2261:
case 1665:
case 1991:
case 1769:
case 2268:
case 936:
case 774:
case 1477:
case 696:
case 2752:
case 4013:
case 2795:
case 1105:
case 968:
case 833:
case 713:
case 3519:
case 1397:
case 1042:
case 2000:
case 2640:
case 3751:
case 55:
case 1090:
case 2500:
case 1278:
case 3040:
case 3557:
case 13:
case 3036:
case 2560:
case 1350:
case 4036:
case 61:
case 3419:
case 4066:
case 3145:
case 746:
case 556:
case 3538:
case 83:
case 1142:
case 373:
case 4089:
case 2888:
case 2067:
case 2840:
case 1268:
case 1596:
case 578:
case 1948:
case 2354:
case 2424:
case 2370:
case 2176:
case 1641:
case 3996:
case 309:
case 2619:
case 216:
case 1307:
case 1407:
case 1795:
case 3660:
case 1346:
case 1536:
case 2545:
case 1635:
case 3272:
case 3922:
case 1120:
case 2117:
case 2207:
case 1356:
case 3615:
case 689:
case 2866:
case 3376:
case 522:
case 2911:
case 1392:
case 3625:
case 2367:
case 3934:
case 181:
case 2737:
case 313:
case 3184:
case 1744:
case 627:
case 2143:
case 3457:
case 1280:
case 458:
case 1191:
case 4012:
case 1246:
case 358:
case 3643:
case 3284:
case 2411:
case 1800:
case 808:
case 3893:
case 1817:
case 1816:
case 691:
case 2114:
case 1422:
case 2499:
case 2998:
case 882:
case 3705:
case 1720:
case 1772:
case 3887:
case 438:
case 1455:
case 3137:
case 1861:
case 3300:
case 996:
case 1782:
case 1827:
case 3762:
case 3613:
case 2401:
case 3083:
case 820:
case 2956:
case 2483:
case 631:
case 3491:
case 1314:
case 3857:
case 3926:
case 3379:
case 73:
case 2322:
case 4046:
case 777:
case 257:
case 3630:
case 9:
case 2775:
case 2492:
case 2387:
case 2023:
case 3724:
case 514:
case 2431:
case 1821:
case 2728:
case 80:
case 1374:
case 4058:
case 28:
case 851:
case 1697:
case 3126:
case 1849:
case 3225:
case 3808:
case 2465:
case 1446:
case 1686:
case 4083:
case 1408:
case 2124:
case 4006:
case 1463:
case 754:
case 1404:
case 2065:
case 1263:
case 3589:
case 553:
case 2583:
case 3425:
case 1799:
case 778:
case 1851:
case 4078:
case 23:
case 3647:
case 3020:
case 2276:
case 1507:
case 1859:
case 2247:
case 1168:
case 1123:
case 2185:
case 3629:
case 20:
case 3155:
case 524:
case 2910:
case 1333:
case 2717:
case 2285:
case 241:
case 1139:
case 610:
case 2061:
case 3420:
case 1016:
case 3823:
case 3346:
case 366:
case 2235:
case 3422:
case 6:
case 516:
case 3430:
case 2518:
case 121:
case 1435:
case 3265:
case 382:
case 130:
case 2312:
case 3092:
case 1576:
case 1464:
case 1232:
case 3608:
case 796:
case 3895:
case 3212:
case 2504:
case 266:
case 3306:
case 2860:
case 214:
case 171:
case 1448:
case 2975:
case 103:
case 344:
case 158:
case 1687:
case 2032:
case 3087:
case 3275:
case 2854:
case 1863:
case 1575:
case 3461:
case 2351:
case 4033:
case 1254:
case 2738:
case 2409:
case 49:
case 752:
case 3194:
case 3535:
case 573:
case 3411:
case 539:
case 3970:
case 1506:
case 1310:
case 1819:
case 115:
case 931:
case 157:
case 3206:
case 3510:
case 3247:
case 2696:
case 2310:
case 3174:
case 1754:
case 493:
case 1899:
case 850:
case 3980:
case 2052:
case 1178:
case 3983:
case 504:
case 3172:
case 439:
case 3950:
case 2349:
case 986:
case 3773:
case 243:
case 3657:
case 2078:
case 3534:
case 412:
case 136:
case 2715:
case 2314:
case 3515:
case 3333:
case 2251:
case 3679:
case 1640:
case 2505:
case 3431:
case 1343:
case 2374:
case 429:
case 1489:
case 2989:
case 930:
case 3758:
case 2779:
case 4080:
case 548:
case 3579:
case 776:
case 4032:
case 2904:
case 1226:
case 118:
case 3038:
case 1064:
case 1853:
case 1833:
case 1044:
case 1273:
case 2460:
case 1242:
case 3666:
case 1395:
case 829:
case 1535:
case 1939:
case 591:
case 2435:
case 64:
case 3162:
case 3651:
case 1906:
case 3042:
case 3478:
case 3342:
case 1561:
case 48:
case 357:
case 2770:
case 2599:
case 2582:
case 527:
case 1152:
case 2586:
case 405:
case 2439:
case 1154:
case 3974:
case 139:
case 1604:
case 1845:
case 2744:
case 22:
case 3956:
case 2039:
case 3382:
case 2407:
case 434:
case 1890:
case 3987:
case 2485:
case 1936:
case 462:
case 3793:
case 2415:
case 1058:
case 736:
case 3994:
case 587:
case 1532:
case 4025:
case 345:
case 2743:
case 52:
case 2396:
case 173:
case 1225:
case 859:
case 3391:
case 2573:
case 4002:
case 1480:
case 413:
case 4044:
case 4052:
case 3409:
case 2119:
case 399:
case 1814:
case 1359:
case 4067:
case 2481:
case 1309:
case 2301:
case 2724:
case 4062:
case 2215:
case 611:
case 1227:
case 98:
case 904:
case 3995:
case 2946:
case 3472:
case 455:
case 4031:
case 3280:
case 3185:
case 4065:
case 1755:
case 117:
case 2976:
case 1746:
case 3954:
case 3011:
case 2631:
case 1369:
case 3506:
case 97:
case 1367:
case 2566:
case 282:
case 1678:
case 806:
case 2313:
case 1449:
case 2791:
case 3689:
case 3984:
case 1039:
case 1580:
case 2565:
case 2075:
case 2284:
case 831:
case 3448:
case 1594:
case 4054:
case 2434:
case 2194:
case 3908:
case 1597:
case 231:
case 3881:
case 92:
case 2954:
case 3967:
case 2850:
case 340:
case 2053:
case 682:
case 3213:
case 2017:
case 1837:
case 2390:
case 2102:
case 3041:
case 2490:
case 1133:
case 2629:
case 2968:
case 286:
case 215:
case 3611:
case 1180:
case 1589:
case 3062:
case 1960:
case 3231:
case 1624:
case 2457:
case 2480:
case 3232:
case 310:
case 3277:
case 645:
case 2992:
case 3972:
case 1587:
case 2925:
case 619:
case 3273:
case 321:
case 3350:
case 3357:
case 3714:
case 2467:
case 2113:
case 3776:
case 2137:
case 3969:
case 4049:
case 554:
case 1737:
case 423:
case 559:
case 2547:
case 2512:
case 223:
case 4077:
case 3463:
case 3016:
case 3694:
case 2188:
case 3965:
case 1012:
case 2493:
case 2655:
case 3089:
case 3335:
case 2564:
case 328:
case 558:
case 846:
case 1098:
case 919:
case 3874:
case 2037:
case 2520:
case 1200:
case 1992:
case 201:
case 122:
case 2612:
case 891:
case 2025:
case 2375:
case 2787:
case 1661:
case 153:
case 1739:
case 3543:
case 3403:
case 3022:
case 1125:
case 2346:
case 2464:
case 3622:
case 1177:
case 3197:
case 2883:
case 809:
case 3068:
case 2597:
case 1733:
case 2997:
case 2402:
case 1500:
case 2070:
case 2151:
case 1751:
case 2125:
case 2412:
case 445:
case 3058:
case 1162:
case 3269:
case 1666:
case 1391:
case 3299:
case 818:
case 1501:
case 1003:
case 3795:
case 35:
case 145:
case 768:
case 728:
case 1377:
case 1879:
case 491:
case 394:
case 681:
case 1070:
case 2811:
case 337:
case 914:
case 1784:
case 1752:
case 2082:
case 1609:
case 1876:
case 4001:
case 1388:
case 3193:
case 2953:
case 3170:
case 3667:
case 881:
case 2098:
case 3276:
case 1428:
case 1106:
case 3568:
case 3537:
case 3349:
case 868:
case 4047:
case 3095:
case 1932:
case 651:
case 1871:
case 1103:
case 1789:
case 2323:
case 1438:
case 1192:
case 724:
case 827:
case 3402:
case 3507:
case 1873:
case 1403:
case 2720:
case 2386:
case 3019:
case 1335:
case 1051:
case 268:
case 17:
case 2421:
case 1559:
case 1465:
case 3054:
case 2632:
case 3034:
case 2403:
case 3555:
case 2804:
case 1122:
case 1022:
case 353:
case 1493:
case 1984:
case 3784:
case 542:
case 3501:
case 2495:
case 368:
case 897:
case 1496:
case 2342:
case 3118:
case 3492:
case 3248:
case 1301:
case 2988:
case 393:
case 1531:
case 3902:
case 715:
case 2661:
case 2769:
case 172:
case 3829:
case 3578:
case 2340:
case 1444:
case 1439:
case 1277:
case 1351:
case 856:
case 3199:
case 378:
case 817:
case 2995:
case 3697:
case 711:
case 3655:
case 2410:
case 613:
case 111:
case 2156:
case 2657:
case 2538:
case 2007:
case 1619:
case 2069:
case 2641:
case 1353:
case 220:
case 1173:
case 1245:
case 1075:
case 703:
case 3150:
case 3737:
case 2544:
case 604:
case 56:
case 3123:
case 3334:
case 2859:
case 2934:
case 318:
case 2121:
case 2944:
case 3371:
case 982:
case 4059:
case 1711:
case 2818:
case 1490:
case 646:
case 43:
case 305:
case 3986:
case 3351:
case 1926:
case 421:
case 1632:
case 3888:
case 2299:
case 2287:
case 3468:
case 1188:
case 1409:
case 629:
case 2601:
case 861:
case 974:
case 3933:
case 3044:
case 3048:
case 3520:
case 3466:
case 2307:
case 1721:
case 428:
case 2901:
case 3620:
case 2932:
case 1565:
case 3692:
case 1396:
case 1847:
case 626:
case 1144:
case 1160:
case 1613:
case 3152:
case 871:
case 1783:
case 133:
case 852:
case 1621:
case 3144:
case 70:
case 3069:
case 1148:
case 1150:
case 3931:
case 895:
case 800:
case 1433:
case 3112:
case 426:
case 1809:
case 2450:
case 1068:
case 134:
case 1045:
case 900:
case 1198:
case 1302:
case 581:
case 3442:
case 1170:
case 2177:
case 675:
case 1820:
case 3014:
case 2994:
case 2507:
case 217:
case 1758:
case 1054:
case 2951:
case 2749:
case 3656:
case 2918:
case 120:
case 3191:
case 977:
case 721:
case 718:
case 3441:
case 3500:
case 416:
case 1156:
case 143:
case 869:
case 2024:
case 3906:
case 3924:
case 3616:
case 269:
case 1650:
case 1267:
case 1541:
case 583:
case 3372:
case 3235:
case 948:
case 2380:
case 880:
case 2509:
case 2258:
case 65:
case 2698:
case 1204:
case 2748:
case 3787:
case 4009:
case 2666:
case 1762:
case 915:
case 1633:
case 479:
case 1320:
case 392:
case 3739:
case 2133:
case 769:
case 1715:
case 1108:
case 903:
case 2569:
case 3502:
case 29:
case 251:
case 3727:
case 3423:
case 3131:
case 431:
case 1028:
case 563:
case 1830:
case 2068:
case 3071:
case 3359:
case 1826:
case 1212:
case 1841:
case 3021:
case 3925:
case 2881:
case 1394:
case 3833:
case 411:
case 1523:
case 3090:
case 3453:
case 3429:
case 3559:
case 2972:
case 3484:
case 1383:
case 3871:
case 446:
case 1336:
case 2890:
case 2473:
case 1637:
case 3097:
case 255:
case 758:
case 3716:
case 1835:
case 3338:
case 1140:
case 727:
case 2759:
case 3132:
case 2936:
case 2928:
case 363:
case 2214:
case 520:
case 1194:
case 3307:
case 2359:
case 315:
case 2245:
case 170:
case 1988:
case 3865:
case 3779:
case 1425:
case 3254:
case 2186:
case 534:
case 1668:
case 3872:
case 3494:
case 616:
case 2423:
case 690:
case 2800:
case 1972:
case 414:
case 4023:
case 1525:
case 1595:
case 3960:
case 2360:
case 41:
case 1929:
case 3445:
case 296:
case 2580:
case 2031:
case 813:
case 2602:
case 3219:
case 2650:
case 3834:
case 77:
case 1011:
case 174:
case 3897:
case 3673:
case 729:
case 1913:
case 3459:
case 1998:
case 1695:
case 4018:
case 1662:
case 671:
case 3746:
case 3869:
case 2943:
case 176:
case 2756:
case 2872:
case 3292:
case 714:
case 1513:
case 100:
case 2621:
case 885:
case 2022:
case 3828:
case 3723:
case 3329:
case 1608:
case 954:
case 3571:
case 1410:
case 2757:
case 3105:
case 3055:
case 1850:
case 2332:
case 676:
case 1602:
case 3017:
case 1764:
case 922:
case 1306:
case 3243:
case 1511:
case 3848:
case 2259:
case 3469:
case 54:
case 1193:
case 3735:
case 327:
case 168:
case 2463:
case 87:
case 1429:
case 1629:
case 311:
case 2865:
case 1473:
case 3789:
case 3202:
case 488:
case 633:
case 1109:
case 3257:
case 983:
case 1778:
case 444:
case 3712:
case 3160:
case 2002:
case 1138:
case 312:
case 2210:
case 2628:
case 1368:
case 2445:
case 1087:
case 3628:
case 2838:
case 530:
case 261:
case 1886:
case 2302:
case 2016:
case 1272:
case 2049:
case 2120:
case 3801:
case 786:
case 2945:
case 2379:
case 3551:
case 3450:
case 1618:
case 784:
case 803:
case 1801:
case 2055:
case 2089:
case 892:
case 672:
case 1461:
case 322:
case 3744:
case 3786:
case 3047:
case 1143:
case 1208:
case 2347:
case 1855:
case 272:
case 2539:
case 2479:
case 3227:
case 2265:
case 1600:
case 1252:
case 2191:
case 1179:
case 1495:
case 2674:
case 485:
case 3859:
case 402:
case 3674:
case 3165:
case 1286:
case 1663:
case 998:
case 1298:
case 1592:
case 662:
case 1322:
case 2761:
case 2397:
case 1136:
case 2546:
case 595:
case 1563:
case 521:
case 58:
case 3772:
case 650:
case 3864:
case 1247:
case 592:
case 835:
case 472:
case 1238:
case 2750:
case 3562:
case 1482:
case 332:
case 836:
case 844:
case 760:
case 3321:
case 3940:
case 442:
case 2526:
case 3015:
case 1964:
case 2672:
case 1483:
case 3373:
case 2886:
case 135:
case 1965:
case 2575:
case 2178:
case 642:
case 926:
case 857:
case 1050:
case 2723:
case 150:
case 2333:
case 1564:
case 3511:
case 3088:
case 1115:
case 1957:
case 1770:
case 2330:
case 1968:
case 1962:
case 3153:
case 2965:
case 1033:
case 2608:
case 3493:
case 3214:
case 1773:
case 3205:
case 1024:
case 3100:
case 3774:
case 2574:
case 2083:
case 3297:
case 3267:
case 1469:
case 756:
case 1264:
case 3516:
case 2054:
case 3590:
case 3536:
case 1344:
case 2026:
case 3937:
case 3266:
case 3093:
case 505:
case 3911:
case 1167:
case 1638:
case 2219:
case 2707:
case 2570:
case 1092:
case 3605:
case 1097:
case 1722:
case 1430:
case 1466:
case 1406:
case 2729:
case 3250:
case 797:
case 2739:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1700996401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,];
var gg_b = "1700996401/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
