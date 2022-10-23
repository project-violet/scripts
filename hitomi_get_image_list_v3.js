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
var o = 0;
switch (g) {
case 2997:
case 2627:
case 1057:
case 1320:
case 2616:
case 1096:
case 4019:
case 2543:
case 834:
case 1934:
case 2419:
case 514:
case 179:
case 3354:
case 3289:
case 2651:
case 573:
case 807:
case 1744:
case 1786:
case 829:
case 515:
case 4005:
case 457:
case 2644:
case 1026:
case 2082:
case 1224:
case 1235:
case 741:
case 270:
case 3314:
case 2395:
case 3235:
case 3274:
case 3031:
case 2672:
case 1634:
case 761:
case 1709:
case 3151:
case 3731:
case 1857:
case 2875:
case 775:
case 1817:
case 2406:
case 1890:
case 246:
case 2742:
case 3443:
case 1315:
case 2360:
case 2870:
case 2149:
case 3964:
case 868:
case 1632:
case 3818:
case 3296:
case 2718:
case 2653:
case 3057:
case 1617:
case 561:
case 2961:
case 3291:
case 3536:
case 1218:
case 2817:
case 3506:
case 3106:
case 10:
case 1900:
case 526:
case 1069:
case 1301:
case 114:
case 3918:
case 2400:
case 837:
case 2397:
case 3427:
case 3227:
case 1773:
case 4084:
case 3361:
case 2946:
case 1363:
case 1970:
case 3676:
case 4089:
case 2168:
case 1352:
case 2451:
case 3001:
case 1196:
case 1241:
case 1621:
case 1655:
case 334:
case 2816:
case 2156:
case 1221:
case 321:
case 3952:
case 3659:
case 847:
case 94:
case 552:
case 3873:
case 1895:
case 2864:
case 493:
case 1378:
case 2527:
case 490:
case 2766:
case 407:
case 3482:
case 2896:
case 1721:
case 2719:
case 2916:
case 2544:
case 178:
case 1688:
case 2000:
case 3559:
case 3841:
case 2606:
case 2325:
case 4044:
case 388:
case 360:
case 1467:
case 3714:
case 2100:
case 1519:
case 848:
case 814:
case 48:
case 2315:
case 3776:
case 3598:
case 451:
case 3530:
case 1462:
case 1612:
case 1284:
case 1250:
case 2153:
case 190:
case 3570:
case 423:
case 2734:
case 755:
case 2204:
case 1561:
case 1705:
case 2791:
case 959:
case 3300:
case 1361:
case 2773:
case 3218:
case 3054:
case 3076:
case 636:
case 3634:
case 3426:
case 572:
case 1707:
case 3625:
case 3470:
case 3649:
case 599:
case 3018:
case 1042:
case 1710:
case 2514:
case 547:
case 2343:
case 2413:
case 164:
case 2790:
case 181:
case 1424:
case 69:
case 3594:
case 3790:
case 734:
case 3133:
case 2849:
case 1886:
case 3747:
case 1355:
case 838:
case 1227:
case 3379:
case 1598:
case 3890:
case 3197:
case 2263:
case 3130:
case 517:
case 2833:
case 1305:
case 3655:
case 2769:
case 3351:
case 1180:
case 1847:
case 150:
case 3866:
case 2781:
case 1133:
case 318:
case 1650:
case 2551:
case 1446:
case 2846:
case 1944:
case 1496:
case 170:
case 2883:
case 3146:
case 1627:
case 858:
case 1777:
case 1960:
case 3414:
case 2512:
case 1472:
case 2071:
case 3425:
case 2686:
case 432:
case 2339:
case 2613:
case 896:
case 2348:
case 1088:
case 78:
case 107:
case 2479:
case 1299:
case 3263:
case 4070:
case 3697:
case 2192:
case 631:
case 3550:
case 3670:
case 2142:
case 2358:
case 1044:
case 2391:
case 1642:
case 2256:
case 2065:
case 1317:
case 3124:
case 2557:
case 293:
case 4065:
case 3919:
case 1919:
case 1831:
case 1573:
case 1258:
case 1179:
case 2449:
case 1863:
case 750:
case 2324:
case 1370:
case 2175:
case 368:
case 1588:
case 3037:
case 1447:
case 2822:
case 2743:
case 2776:
case 997:
case 2756:
case 3667:
case 3368:
case 141:
case 3729:
case 2286:
case 251:
case 2876:
case 723:
case 3762:
case 762:
case 3619:
case 3541:
case 3549:
case 2319:
case 1476:
case 3759:
case 941:
case 1493:
case 3706:
case 2098:
case 1545:
case 3099:
case 3153:
case 2492:
case 3631:
case 1158:
case 1253:
case 307:
case 749:
case 1036:
case 3845:
case 487:
case 929:
case 3543:
case 2714:
case 3891:
case 3248:
case 1294:
case 2786:
case 1099:
case 1932:
case 2933:
case 2610:
case 675:
case 3460:
case 912:
case 2866:
case 816:
case 1622:
case 2843:
case 1482:
case 4091:
case 142:
case 3109:
case 1751:
case 3234:
case 1086:
case 3364:
case 944:
case 3616:
case 84:
case 2111:
case 1222:
case 1134:
case 2641:
case 2923:
case 3497:
case 579:
case 3410:
case 203:
case 446:
case 1914:
case 2540:
case 1314:
case 3787:
case 330:
case 216:
case 2694:
case 3502:
case 374:
case 4046:
case 3869:
case 1403:
case 3779:
case 1030:
case 2837:
case 3843:
case 3699:
case 1853:
case 923:
case 2517:
case 2190:
case 2255:
case 3053:
case 2276:
case 781:
case 3282:
case 2291:
case 196:
case 3961:
case 3180:
case 104:
case 1618:
case 2076:
case 1544:
case 2203:
case 31:
case 105:
case 2216:
case 2635:
case 2053:
case 3851:
case 3202:
case 3911:
case 875:
case 3802:
case 585:
case 2123:
case 333:
case 536:
case 1413:
case 3577:
case 3628:
case 985:
case 1433:
case 742:
case 3241:
case 3895:
case 4068:
case 3384:
case 1254:
case 1782:
case 108:
case 1555:
case 2167:
case 3011:
case 1215:
case 3276:
case 2126:
case 1760:
case 450:
case 2448:
case 2657:
case 398:
case 2312:
case 1711:
case 2658:
case 2979:
case 359:
case 1685:
case 3175:
case 1038:
case 1733:
case 1232:
case 1794:
case 466:
case 1169:
case 3702:
case 1528:
case 1637:
case 2346:
case 135:
case 634:
case 2266:
case 2882:
case 2201:
case 2050:
case 140:
case 917:
case 3739:
case 1386:
case 1405:
case 2905:
case 3561:
case 3931:
case 3947:
case 472:
case 103:
case 792:
case 486:
case 2140:
case 2508:
case 1564:
case 3424:
case 2892:
case 2331:
case 11:
case 2069:
case 185:
case 1453:
case 793:
case 664:
case 3880:
case 1383:
case 1822:
case 2211:
case 3201:
case 8:
case 2591:
case 901:
case 2041:
case 3668:
case 2547:
case 1414:
case 3340:
case 2056:
case 810:
case 4039:
case 2972:
case 3643:
case 1807:
case 1167:
case 3782:
case 129:
case 63:
case 3963:
case 2917:
case 645:
case 2728:
case 3162:
case 3313:
case 82:
case 3004:
case 320:
case 3713:
case 3563:
case 1795:
case 3081:
case 3431:
case 1471:
case 3793:
case 3475:
case 2143:
case 655:
case 2463:
case 2904:
case 3573:
case 3434:
case 1085:
case 1193:
case 1942:
case 2426:
case 2784:
case 673:
case 602:
case 1176:
case 3461:
case 2017:
case 1506:
case 461:
case 393:
case 1904:
case 3979:
case 1347:
case 215:
case 2696:
case 253:
case 46:
case 735:
case 1400:
case 3448:
case 2026:
case 3623:
case 1818:
case 2032:
case 1226:
case 613:
case 3968:
case 205:
case 3848:
case 2229:
case 1801:
case 464:
case 1423:
case 857:
case 2285:
case 1040:
case 3284:
case 1014:
case 3997:
case 2304:
case 2963:
case 1283:
case 3998:
case 2296:
case 2309:
case 989:
case 2796:
case 2310:
case 1983:
case 30:
case 379:
case 1813:
case 1151:
case 3324:
case 684:
case 3084:
case 1273:
case 727:
case 1023:
case 2049:
case 3464:
case 2927:
case 3043:
case 2238:
case 3974:
case 1238:
case 624:
case 3657:
case 2675:
case 443:
case 2194:
case 3867:
case 1329:
case 3783:
case 2364:
case 3249:
case 1457:
case 611:
case 1259:
case 1992:
case 1223:
case 1460:
case 3154:
case 1595:
case 3700:
case 311:
case 1580:
case 2260:
case 1922:
case 565:
case 3728:
case 1791:
case 2242:
case 1785:
case 3819:
case 3119:
case 3334:
case 3856:
case 1244:
case 2493:
case 2019:
case 1603:
case 1129:
case 581:
case 2253:
case 3255:
case 147:
case 3815:
case 3279:
case 523:
case 2986:
case 241:
case 3469:
case 4056:
case 1336:
case 3212:
case 4042:
case 2643:
case 978:
case 3883:
case 3008:
case 210:
case 1480:
case 1062:
case 2812:
case 138:
case 4090:
case 1667:
case 2273:
case 3629:
case 2835:
case 2251:
case 1205:
case 1671:
case 2915:
case 197:
case 2279:
case 3226:
case 652:
case 2722:
case 1313:
case 3253:
case 2164:
case 1349:
case 3784:
case 1532:
case 527:
case 1743:
case 982:
case 820:
case 1300:
case 1559:
case 124:
case 591:
case 3758:
case 745:
case 1694:
case 3238:
case 1494:
case 688:
case 1859:
case 3144:
case 3458:
case 3912:
case 1053:
case 3159:
case 3557:
case 702:
case 1879:
case 3499:
case 81:
case 2138:
case 2408:
case 3914:
case 3522:
case 3052:
case 1781:
case 2376:
case 3496:
case 1985:
case 2040:
case 3358:
case 2420:
case 319:
case 903:
case 2507:
case 1029:
case 2618:
case 2465:
case 3024:
case 1830:
case 879:
case 2814:
case 2703:
case 2523:
case 1422:
case 3353:
case 287:
case 1073:
case 1455:
case 883:
case 3306:
case 3771:
case 471:
case 2706:
case 1626:
case 3167:
case 705:
case 1957:
case 174:
case 3754:
case 227:
case 4067:
case 3669:
case 1547:
case 3908:
case 2577:
case 1746:
case 18:
case 3574:
case 3491:
case 3286:
case 546:
case 692:
case 3332:
case 3157:
case 2366:
case 3278:
case 3075:
case 1810:
case 2462:
case 2183:
case 505:
case 3452:
case 3374:
case 3548:
case 2336:
case 3271:
case 3191:
case 1530:
case 3627:
case 3025:
case 71:
case 2301:
case 1762:
case 3595:
case 3942:
case 3073:
case 199:
case 757:
case 146:
case 3376:
case 3485:
case 907:
case 2546:
case 806:
case 3894:
case 1948:
case 1165:
case 1749:
case 133:
case 3165:
case 1965:
case 305:
case 2878:
case 3811:
case 3560:
case 2624:
case 3962:
case 1958:
case 1968:
case 274:
case 1726:
case 1153:
case 694:
case 1437:
case 1310:
case 3636:
case 2283:
case 3446:
case 3660:
case 3879:
case 354:
case 1576:
case 4022:
case 171:
case 603:
case 1926:
case 2468:
case 3582:
case 1348:
case 3115:
case 3831:
case 3206:
case 2605:
case 1509:
case 2302:
case 2501:
case 1778:
case 3207:
case 1011:
case 3111:
case 3566:
case 1382:
case 2581:
case 3479:
case 494:
case 248:
case 2704:
case 2063:
case 3532:
case 2272:
case 3363:
case 57:
case 1666:
case 50:
case 731:
case 1533:
case 1681:
case 13:
case 2711:
case 2254:
case 3724:
case 3562:
case 1488:
case 507:
case 2212:
case 1107:
case 824:
case 1285:
case 3391:
case 2626:
case 1031:
case 3521:
case 3839:
case 1463:
case 2004:
case 2555:
case 2771:
case 1776:
case 1163:
case 2385:
case 3734:
case 291:
case 3741:
case 1593:
case 2328:
case 2669:
case 1464:
case 3554:
case 488:
case 3199:
case 691:
case 574:
case 2621:
case 1242:
case 1195:
case 223:
case 3707:
case 2701:
case 414:
case 2599:
case 3514:
case 1553:
case 1505:
case 1911:
case 2001:
case 1249:
case 3272:
case 1261:
case 3737:
case 1419:
case 3194:
case 2225:
case 3635:
case 2407:
case 3399:
case 1486:
case 467:
case 3292:
case 1956:
case 1747:
case 2688:
case 616:
case 3094:
case 378:
case 2957:
case 3326:
case 2166:
case 1740:
case 3016:
case 3938:
case 415:
case 3860:
case 2281:
case 1081:
case 2702:
case 767:
case 1602:
case 719:
case 924:
case 2759:
case 756:
case 3297:
case 1111:
case 3954:
case 3129:
case 537:
case 2955:
case 1660:
case 974:
case 1365:
case 580:
case 2093:
case 608:
case 3041:
case 2446:
case 2529:
case 936:
case 2940:
case 3680:
case 3542:
case 4014:
case 782:
case 569:
case 1013:
case 1909:
case 3411:
case 273:
case 3147:
case 2763:
case 1170:
case 3769:
case 1980:
case 90:
case 2191:
case 3327:
case 2248:
case 916:
case 4009:
case 2996:
case 4028:
case 961:
case 638:
case 3323:
case 3763:
case 3317:
case 1395:
case 3750:
case 2528:
case 3381:
case 3551:
case 1714:
case 2661:
case 3967:
case 1126:
case 1191:
case 110:
case 2631:
case 3321:
case 427:
case 122:
case 430:
case 3788:
case 2553:
case 994:
case 3375:
case 3799:
case 2409:
case 3347:
case 2932:
case 1237:
case 3624:
case 3946:
case 1569:
case 1093:
case 1741:
case 3641:
case 1287:
case 2716:
case 1230:
case 1825:
case 2012:
case 3267:
case 1327:
case 460:
case 2980:
case 1993:
case 1851:
case 1581:
case 3192:
case 238:
case 626:
case 3320:
case 2037:
case 830:
case 4057:
case 2186:
case 1444:
case 1247:
case 440:
case 744:
case 1643:
case 3709:
case 2096:
case 3026:
case 2436:
case 1092:
case 3059:
case 1216:
case 2699:
case 540:
case 3331:
case 3453:
case 3435:
case 1390:
case 2333:
case 3335:
case 384:
case 2725:
case 1538:
case 1097:
case 1109:
case 788:
case 2673:
case 3224:
case 2772:
case 132:
case 1947:
case 2326:
case 583:
case 1041:
case 3638:
case 984:
case 3378:
case 1862:
case 1906:
case 3701:
case 3433:
case 3767:
case 2439:
case 2950:
case 2698:
case 2990:
case 1713:
case 1768:
case 2456:
case 2210:
case 1002:
case 1293:
case 801:
case 1587:
case 1206:
case 2596:
case 4066:
case 1335:
case 2691:
case 1665:
case 667:
case 2359:
case 3976:
case 3949:
case 2188:
case 3166:
case 1723:
case 3853:
case 2872:
case 1443:
case 1399:
case 3654:
case 1421:
case 317:
case 3342:
case 3658:
case 2094:
case 2380:
case 1855:
case 1316:
case 1132:
case 796:
case 746:
case 3546:
case 2900:
case 123:
case 3367:
case 1787:
case 2829:
case 3780:
case 938:
case 3488:
case 1631:
case 1907:
case 2368:
case 3090:
case 2838:
case 2532:
case 698:
case 3651:
case 3386:
case 1546:
case 2299:
case 2450:
case 1498:
case 1507:
case 3512:
case 2600:
case 2729:
case 1184:
case 54:
case 897:
case 290:
case 1377:
case 445:
case 297:
case 885:
case 3036:
case 3467:
case 1095:
case 322:
case 3177:
case 2654:
case 258:
case 3671:
case 2778:
case 1884:
case 1798:
case 109:
case 2881:
case 1228:
case 2633:
case 247:
case 3637:
case 3490:
case 2015:
case 2541:
case 3639:
case 2051:
case 2682:
case 3916:
case 403:
case 3939:
case 2181:
case 1658:
case 3567:
case 173:
case 3416:
case 1229:
case 1976:
case 1552:
case 3362:
case 3126:
case 1103:
case 1680:
case 4086:
case 1022:
case 3312:
case 3280:
case 3390:
case 551:
case 3178:
case 4061:
case 1499:
case 3740:
case 2264:
case 3466:
case 3691:
case 640:
case 1765:
case 3973:
case 1720:
case 1208:
case 3630:
case 1848:
case 3835:
case 3480:
case 2981:
case 3100:
case 3298:
case 1071:
case 1322:
case 900:
case 1641:
case 2525:
case 1725:
case 263:
case 3922:
case 3509:
case 904:
case 1556:
case 2131:
case 795:
case 1701:
case 3072:
case 2765:
case 2568:
case 3156:
case 1752:
case 153:
case 1759:
case 2721:
case 1613:
case 1803:
case 1025:
case 2403:
case 1923:
case 2058:
case 1342:
case 380:
case 421:
case 1829:
case 513:
case 1736:
case 3422:
case 2520:
case 2935:
case 3044:
case 1841:
case 3692:
case 1144:
case 2112:
case 852:
case 937:
case 1248:
case 80:
case 2258:
case 2800:
case 3798:
case 2815:
case 853:
case 1004:
case 1513:
case 3242:
case 2848:
case 3089:
case 2903:
case 73:
case 3621:
case 1940:
case 60:
case 189:
case 3225:
case 3944:
case 2350:
case 1590:
case 2925:
case 1663:
case 1661:
case 3719:
case 401:
case 213:
case 3405:
case 4058:
case 4002:
case 1652:
case 3596:
case 3086:
case 2039:
case 1491:
case 3223:
case 1448:
case 489:
case 2378:
case 2278:
case 3805:
case 2246:
case 4047:
case 2425:
case 98:
case 2200:
case 2:
case 3924:
case 1174:
case 2733:
case 511:
case 3403:
case 3666:
case 3101:
case 1562:
case 3898:
case 480:
case 4095:
case 232:
case 617:
case 2234:
case 3062:
case 2983:
case 242:
case 2353:
case 1516:
case 2338:
case 2677:
case 2542:
case 2195:
case 1108:
case 3371:
case 1252:
case 1051:
case 2356:
case 2537:
case 1952:
case 148:
case 1961:
case 58:
case 3290:
case 2269:
case 2538:
case 3602:
case 1303:
case 3032:
case 3474:
case 3067:
case 1021:
case 357:
case 1625:
case 3412:
case 1928:
case 1504:
case 268:
case 3775:
case 1182:
case 519:
case 1068:
case 2789:
case 74:
case 329:
case 447:
case 3142:
case 119:
case 1894:
case 3370:
case 3158:
case 3182:
case 1084:
case 1406:
case 1127:
case 3834:
case 3404:
case 1501:
case 1979:
case 676:
case 2674:
case 783:
case 1779:
case 3764:
case 2321:
case 45:
case 1987:
case 3068:
case 1411:
case 1653:
case 1542:
case 1415:
case 2330:
case 2101:
case 818:
case 2739:
case 2530:
case 3251:
case 2002:
case 3056:
case 545:
case 4012:
case 1748:
case 1067:
case 2779:
case 492:
case 1769:
case 429:
case 1412:
case 3465:
case 2890:
case 1172:
case 1321:
case 999:
case 465:
case 748:
case 3721:
case 3472:
case 3695:
case 1766:
case 42:
case 3117:
case 259:
case 1664:
case 1614:
case 3909:
case 4036:
case 952:
case 510:
case 2472:
case 1045:
case 3960:
case 193:
case 1969:
case 1269:
case 2024:
case 14:
case 1387:
case 372:
case 906:
case 3717:
case 716:
case 1994:
case 2511:
case 4004:
case 3823:
case 1790:
case 1140:
case 1656:
case 3019:
case 1267:
case 2685:
case 2075:
case 1727:
case 1483:
case 1006:
case 3591:
case 2130:
case 1137:
case 1302:
case 439:
case 2994:
case 4001:
case 1758:
case 1799:
case 3397:
case 851:
case 2086:
case 1615:
case 1440:
case 3134:
case 4074:
case 3169:
case 3677:
case 3415:
case 3400:
case 1797:
case 3770:
case 62:
case 2874:
case 1964:
case 1434:
case 1375:
case 364:
case 2329:
case 1724:
case 2435:
case 1539:
case 3074:
case 787:
case 3809:
case 2147:
case 3181:
case 2066:
case 1115:
case 3585:
case 3444:
case 2074:
case 389:
case 2513:
case 2270:
case 2650:
case 3430:
case 659:
case 2894:
case 644:
case 1257:
case 3681:
case 915:
case 3774:
case 657:
case 2919:
case 1635:
case 3450:
case 726:
case 2496:
case 2985:
case 2697:
case 2196:
case 1868:
case 2622:
case 3217:
case 85:
case 3200:
case 3233:
case 2966:
case 3981:
case 2367:
case 2536:
case 704:
case 2724:
case 3535:
case 3988:
case 2767:
case 3525:
case 2909:
case 618:
case 3995:
case 145:
case 2977:
case 1646:
case 1557:
case 763:
case 3148:
case 954:
case 1063:
case 3642:
case 1579:
case 3392:
case 3972:
case 3215:
case 325:
case 1757:
case 2306:
case 418:
case 4049:
case 67:
case 2284:
case 1146:
case 785:
case 578:
case 3933:
case 3792:
case 1878:
case 2322:
case 4025:
case 1312:
case 2029:
case 3170:
case 3033:
case 1669:
case 3900:
case 3678:
case 1372:
case 2290:
case 992:
case 2003:
case 588:
case 2157:
case 2373:
case 498:
case 3605:
case 3066:
case 383:
case 2920:
case 390:
case 2080:
case 97:
case 635:
case 1629:
case 908:
case 2799:
case 593:
case 1892:
case 2089:
case 428:
case 3287:
case 867:
case 3388:
case 3246:
case 2349:
case 1256:
case 1719:
case 939:
case 1858:
case 1963:
case 2931:
case 2918:
case 672:
case 713:
case 2305:
case 448:
case 2205:
case 2158:
case 654:
case 2978:
case 1645:
case 1837:
case 728:
case 1560:
case 1380:
case 3504:
case 1550:
case 528:
case 2989:
case 3718:
case 4000:
case 3801:
case 1823:
case 2636:
case 353:
case 2801:
case 2452:
case 1251:
case 1246:
case 346:
case 1277:
case 144:
case 776:
case 842:
case 1438:
case 3684:
case 538:
case 797:
case 736:
case 2726:
case 877:
case 2237:
case 1426:
case 2928:
case 752:
case 2973:
case 720:
case 1:
case 3128:
case 377:
case 3085:
case 3114:
case 508:
case 420:
case 3726:
case 3396:
case 2115:
case 3814:
case 313:
case 2741:
case 1605:
case 2013:
case 1918:
case 1936:
case 1755:
case 577:
case 3205:
case 2122:
case 831:
case 1055:
case 1584:
case 3743:
case 3523:
case 1282:
case 3040:
case 24:
case 905:
case 2473:
case 2795:
case 117:
case 1280:
case 3468:
case 2440:
case 3421:
case 872:
case 2998:
case 194:
case 3966:
case 252:
case 2628:
case 3456:
case 3578:
case 2488:
case 2899:
case 32:
case 1056:
case 2880:
case 3329:
case 2680:
case 1991:
case 1357:
case 3829:
case 3928:
case 19:
case 1548:
case 225:
case 1186:
case 832:
case 2345:
case 1307:
case 1436:
case 462:
case 714:
case 3268:
case 316:
case 2228:
case 2897:
case 1990:
case 1214:
case 956:
case 920:
case 576:
case 324:
case 730:
case 126:
case 1270:
case 991:
case 1367:
case 2109:
case 845:
case 468:
case 68:
case 1338:
case 2780:
case 932:
case 61:
case 2867:
case 2389:
case 2665:
case 1683:
case 849:
case 648:
case 3844:
case 2579:
case 59:
case 2393:
case 3778:
case 2028:
case 1834:
case 609:
case 478:
case 2418:
case 3309:
case 491:
case 662:
case 1465:
case 3618:
case 1984:
case 222:
case 862:
case 2298:
case 2895:
case 758:
case 3576:
case 3108:
case 2213:
case 1599:
case 3338:
case 303:
case 2390:
case 710:
case 3058:
case 4079:
case 3647:
case 2434:
case 1420:
case 2386:
case 3045:
case 3925:
case 3477:
case 1118:
case 2732:
case 1466:
case 3920:
case 1175:
case 237:
case 1767:
case 942:
case 266:
case 2474:
case 3064:
case 3333:
case 564:
case 3104:
case 458:
case 3511:
case 2693:
case 1735:
case 1689:
case 1852:
case 3572:
case 2638:
case 1012:
case 3330:
case 3003:
case 2198:
case 2885:
case 3247:
case 1869:
case 2647:
case 2533:
case 283:
case 1234:
case 1351:
case 1470:
case 2646:
case 1404:
case 4038:
case 3377:
case 1966:
case 677:
case 55:
case 2088:
case 3285:
case 869:
case 722:
case 4010:
case 2939:
case 477:
case 424:
case 3203:
case 191:
case 2841:
case 1950:
case 2303:
case 234:
case 2240:
case 3590:
case 1905:
case 1468:
case 886:
case 2865:
case 1774:
case 2046:
case 1008:
case 1898:
case 3492:
case 3948:
case 115:
case 957:
case 2018:
case 595:
case 4075:
case 2480:
case 1589:
case 3905:
case 1732:
case 1114:
case 437:
case 2335:
case 2441:
case 1325:
case 2478:
case 3172:
case 953:
case 1449:
case 3088:
case 1078:
case 803:
case 503:
case 2936:
case 183:
case 909:
case 1212:
case 2414:
case 2561:
case 3017:
case 968:
case 1492:
case 271:
case 286:
case 2268:
case 3237:
case 2490:
case 2199:
case 496:
case 3198:
case 2664:
case 520:
case 3884:
case 2594:
case 623:
case 3581:
case 1289:
case 683:
case 482:
case 295:
case 3745:
case 1763:
case 3442:
case 3229:
case 1951:
case 686:
case 1867:
case 130:
case 979:
case 56:
case 1431:
case 2344:
case 1425:
case 2582:
case 2995:
case 828:
case 1007:
case 3859:
case 4026:
case 6:
case 25:
case 1094:
case 3748:
case 747:
case 2387:
case 945:
case 2209:
case 3127:
case 9:
case 4062:
case 2705:
case 2813:
case 2802:
case 3417:
case 597:
case 1131:
case 264:
case 1204:
case 3091:
case 1893:
case 410:
case 2847:
case 1160:
case 1702:
case 1027:
case 3270:
case 100:
case 1358:
case 1070:
case 1330:
case 2083:
case 2361:
case 2531:
case 1866:
case 650:
case 3672:
case 1921:
case 2429:
case 3454:
case 3870:
case 433:
case 2482:
case 182:
case 1949:
case 1398:
case 3744:
case 2377:
case 3495:
case 304:
case 3213:
case 2442:
case 2099:
case 669:
case 1291:
case 2430:
case 1120:
case 1536:
case 2522:
case 1873:
case 1596:
case 1490:
case 369:
case 2964:
case 2477:
case 1529:
case 3826:
case 351:
case 951:
case 1000:
case 2404:
case 4029:
case 1609:
case 1368:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1666526401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,];
var gg_b = "1666526401/";

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
