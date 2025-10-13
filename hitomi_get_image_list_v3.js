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
var o = 1;
switch (g) {
case 2857:
case 2726:
case 388:
case 4076:
case 596:
case 3704:
case 1185:
case 2577:
case 2970:
case 3668:
case 772:
case 569:
case 1815:
case 1389:
case 311:
case 90:
case 2251:
case 2:
case 2396:
case 1142:
case 415:
case 2121:
case 239:
case 1719:
case 1489:
case 1922:
case 1143:
case 3734:
case 407:
case 2496:
case 3273:
case 2941:
case 945:
case 3848:
case 3736:
case 1139:
case 2032:
case 2494:
case 2612:
case 1452:
case 2218:
case 815:
case 3080:
case 3917:
case 1607:
case 2613:
case 3758:
case 4064:
case 1230:
case 1453:
case 3114:
case 52:
case 1017:
case 1305:
case 2175:
case 1637:
case 1587:
case 2747:
case 1200:
case 2055:
case 1353:
case 2724:
case 2379:
case 3706:
case 373:
case 2002:
case 822:
case 2469:
case 2958:
case 3291:
case 3851:
case 1703:
case 1820:
case 2535:
case 1047:
case 3629:
case 3408:
case 1702:
case 1024:
case 880:
case 1264:
case 290:
case 2936:
case 345:
case 228:
case 2487:
case 3257:
case 3897:
case 4030:
case 988:
case 441:
case 293:
case 1579:
case 2906:
case 1621:
case 3924:
case 3308:
case 1859:
case 790:
case 3456:
case 3561:
case 2286:
case 2642:
case 2873:
case 4000:
case 335:
case 2387:
case 2505:
case 1274:
case 2552:
case 1733:
case 3144:
case 3438:
case 3947:
case 30:
case 2872:
case 679:
case 2643:
case 3540:
case 478:
case 1883:
case 1596:
case 483:
case 2798:
case 1665:
case 2904:
case 126:
case 1882:
case 2328:
case 102:
case 624:
case 2911:
case 1995:
case 1113:
case 2934:
case 3741:
case 314:
case 695:
case 127:
case 1367:
case 2609:
case 159:
case 3760:
case 559:
case 835:
case 2020:
case 527:
case 1223:
case 3431:
case 2847:
case 2365:
case 3301:
case 2824:
case 1628:
case 3314:
case 691:
case 2241:
case 383:
case 3806:
case 3568:
case 2677:
case 934:
case 380:
case 3331:
case 2465:
case 2590:
case 2375:
case 1105:
case 3962:
case 845:
case 1152:
case 4095:
case 944:
case 2667:
case 3414:
case 3578:
case 492:
case 1900:
case 1507:
case 2083:
case 1385:
case 3416:
case 1280:
case 2196:
case 2512:
case 331:
case 2082:
case 1189:
case 3786:
case 3748:
case 915:
case 378:
case 2826:
case 3804:
case 1342:
case 1485:
case 2045:
case 3217:
case 341:
case 1343:
case 720:
case 1312:
case 3388:
case 1999:
case 3224:
case 3346:
case 2437:
case 223:
case 2635:
case 1669:
case 1313:
case 344:
case 3247:
case 2015:
case 3860:
case 470:
case 1974:
case 1783:
case 2605:
case 1849:
case 12:
case 473:
case 3640:
case 3488:
case 3991:
case 3074:
case 2898:
case 1782:
case 3718:
case 1679:
case 298:
case 723:
case 983:
case 1167:
case 2542:
case 2407:
case 1964:
case 3661:
case 1413:
case 334:
case 1966:
case 2234:
case 2773:
case 306:
case 3444:
case 1833:
case 197:
case 2689:
case 1565:
case 3076:
case 941:
case 488:
case 689:
case 4022:
case 1696:
case 1720:
case 1803:
case 2817:
case 3327:
case 307:
case 169:
case 2509:
case 612:
case 1976:
case 2984:
case 1295:
case 870:
case 3066:
case 3344:
case 3797:
case 3226:
case 1575:
case 196:
case 2204:
case 1390:
case 315:
case 1014:
case 3472:
case 1001:
case 479:
case 2838:
case 824:
case 2744:
case 1180:
case 3362:
case 3473:
case 2296:
case 4077:
case 2727:
case 1289:
case 2576:
case 785:
case 432:
case 1778:
case 989:
case 729:
case 925:
case 895:
case 3372:
case 2965:
case 3914:
case 756:
case 442:
case 1031:
case 631:
case 4067:
case 1768:
case 3373:
case 2566:
case 3281:
case 2451:
case 994:
case 163:
case 680:
case 3916:
case 3828:
case 2160:
case 2921:
case 2318:
case 1400:
case 274:
case 517:
case 1123:
case 495:
case 53:
case 3515:
case 3085:
case 2141:
case 2029:
case 842:
case 1235:
case 2170:
case 516:
case 879:
case 2574:
case 1205:
case 1892:
case 2418:
case 1252:
case 3043:
case 2788:
case 774:
case 1016:
case 1586:
case 683:
case 3198:
case 391:
case 54:
case 1548:
case 2279:
case 3042:
case 2746:
case 3633:
case 2530:
case 3013:
case 748:
case 421:
case 1825:
case 3896:
case 607:
case 1499:
case 3391:
case 312:
case 3582:
case 1518:
case 2716:
case 3357:
case 238:
case 3012:
case 1364:
case 771:
case 550:
case 394:
case 3238:
case 4035:
case 3655:
case 2386:
case 3491:
case 3988:
case 3208:
case 3946:
case 4005:
case 622:
case 2348:
case 606:
case 4052:
case 553:
case 2907:
case 1195:
case 3603:
case 3126:
case 1729:
case 1374:
case 2104:
case 4053:
case 3457:
case 2111:
case 2287:
case 248:
case 325:
case 1551:
case 3520:
case 3927:
case 3869:
case 3124:
case 1660:
case 1376:
case 213:
case 147:
case 3147:
case 991:
case 634:
case 2228:
case 3775:
case 2701:
case 1476:
case 1861:
case 821:
case 1027:
case 713:
case 1267:
case 146:
case 3254:
case 2484:
case 137:
case 3765:
case 210:
case 3894:
case 1840:
case 767:
case 1239:
case 2754:
case 537:
case 3807:
case 2118:
case 825:
case 299:
case 2360:
case 889:
case 3519:
case 546:
case 1792:
case 2676:
case 924:
case 3981:
case 3498:
case 2888:
case 673:
case 1130:
case 266:
case 3201:
case 670:
case 2460:
case 766:
case 2275:
case 536:
case 3728:
case 1511:
case 284:
case 2666:
case 547:
case 894:
case 1100:
case 4090:
case 995:
case 1422:
case 812:
case 3398:
case 1989:
case 2996:
case 3162:
case 1952:
case 1380:
case 3035:
case 275:
case 75:
case 1905:
case 1285:
case 1953:
case 412:
case 504:
case 1506:
case 2664:
case 3417:
case 1868:
case 3053:
case 1686:
case 688:
case 3172:
case 2738:
case 2061:
case 1648:
case 2844:
case 2827:
case 2756:
case 1243:
case 3052:
case 1935:
case 3317:
case 2969:
case 1710:
case 3005:
case 2040:
case 1878:
case 979:
case 25:
case 1038:
case 1176:
case 14:
case 692:
case 3779:
case 3246:
case 3908:
case 3682:
case 1618:
case 730:
case 1761:
case 116:
case 395:
case 2580:
case 3683:
case 1056:
case 3347:
case 1213:
case 240:
case 2184:
case 4042:
case 3503:
case 2600:
case 2358:
case 1166:
case 3956:
case 243:
case 2406:
case 1771:
case 491:
case 3645:
case 558:
case 563:
case 891:
case 4039:
case 3191:
case 2522:
case 2334:
case 2781:
case 1541:
case 1697:
case 3077:
case 1651:
case 3620:
case 1164:
case 218:
case 60:
case 3157:
case 379:
case 718:
case 1725:
case 342:
case 3227:
case 3067:
case 2186:
case 2434:
case 1290:
case 2311:
case 3326:
case 2816:
case 3244:
case 781:
case 1570:
case 2093:
case 1395:
case 1977:
case 1767:
case 1096:
case 2519:
case 3676:
case 943:
case 848:
case 1182:
case 2089:
case 3470:
case 3265:
case 4068:
case 2214:
case 3846:
case 366:
case 2201:
case 1449:
case 1183:
case 152:
case 2981:
case 2498:
case 3888:
case 3595:
case 1777:
case 3666:
case 3275:
case 2728:
case 410:
case 933:
case 1526:
case 940:
case 3996:
case 2398:
case 367:
case 2837:
case 3441:
case 1925:
case 1402:
case 3071:
case 1547:
case 1691:
case 3994:
case 438:
case 375:
case 2615:
case 3197:
case 2035:
case 221:
case 1120:
case 3151:
case 1657:
case 1524:
case 0:
case 2216:
case 1890:
case 3221:
case 3699:
case 2172:
case 649:
case 2053:
case 448:
case 471:
case 1971:
case 35:
case 1094:
case 1432:
case 6:
case 918:
case 813:
case 3756:
case 2052:
case 3969:
case 984:
case 3458:
case 2288:
case 2246:
case 3814:
case 3801:
case 2532:
case 2682:
case 4029:
case 333:
case 3306:
case 3436:
case 3184:
case 1839:
case 2865:
case 967:
case 857:
case 2683:
case 3580:
case 2533:
case 3010:
case 3987:
case 1809:
case 2645:
case 3237:
case 999:
case 4050:
case 1735:
case 2503:
case 3600:
case 1910:
case 2875:
case 966:
case 330:
case 3336:
case 2555:
case 2938:
case 224:
case 2502:
case 3831:
case 2077:
case 1115:
case 3334:
case 3781:
case 232:
case 1028:
case 2191:
case 1663:
case 2426:
case 86:
case 279:
case 95:
case 2157:
case 3404:
case 1319:
case 2954:
case 3523:
case 2620:
case 1789:
case 3434:
case 1598:
case 2227:
case 2549:
case 429:
case 1842:
case 732:
case 485:
case 3816:
case 2244:
case 3928:
case 457:
case 3311:
case 1419:
case 3397:
case 2362:
case 356:
case 418:
case 3838:
case 2931:
case 971:
case 2472:
case 830:
case 2363:
case 1065:
case 1225:
case 948:
case 1132:
case 481:
case 3576:
case 3351:
case 1320:
case 2473:
case 3296:
case 3856:
case 3965:
case 1155:
case 2009:
case 2372:
case 840:
case 329:
case 4093:
case 3566:
case 3451:
case 1103:
case 1075:
case 3695:
case 2463:
case 4092:
case 1626:
case 682:
case 2901:
case 791:
case 4010:
case 3564:
case 1877:
case 3921:
case 1950:
case 3318:
case 1382:
case 1557:
case 2916:
case 3029:
case 1647:
case 1591:
case 910:
case 1383:
case 3141:
case 1271:
case 1345:
case 2043:
case 430:
case 3574:
case 2707:
case 1713:
case 2042:
case 3279:
case 881:
case 2198:
case 1021:
case 291:
case 3788:
case 212:
case 3134:
case 929:
case 789:
case 2583:
case 2633:
case 2238:
case 884:
case 475:
case 1742:
case 2357:
case 2632:
case 2721:
case 866:
case 2208:
case 2946:
case 2491:
case 2988:
case 371:
case 3104:
case 2457:
case 3287:
case 348:
case 2545:
case 2126:
case 1037:
case 2603:
case 3907:
case 1785:
case 3106:
case 1563:
case 2927:
case 1835:
case 509:
case 3068:
case 2944:
case 698:
case 2147:
case 3622:
case 623:
case 552:
case 3701:
case 467:
case 3714:
case 2879:
case 1572:
case 1698:
case 3484:
case 2894:
case 1739:
case 1852:
case 2649:
case 875:
case 1805:
case 2431:
case 3847:
case 3365:
case 66:
case 3260:
case 3020:
case 3677:
case 1766:
case 1097:
case 780:
case 920:
case 2568:
case 998:
case 4019:
case 283:
case 3824:
case 1171:
case 2962:
case 1544:
case 3997:
case 3590:
case 3375:
case 1140:
case 2331:
case 3465:
case 3270:
case 890:
case 3194:
case 2836:
case 18:
case 2401:
case 1776:
case 2414:
case 2858:
case 2298:
case 1654:
case 1920:
case 1527:
case 1233:
case 1329:
case 2416:
case 490:
case 1656:
case 685:
case 3513:
case 1546:
case 1125:
case 2748:
case 1018:
case 382:
case 2786:
case 1799:
case 1638:
case 3512:
case 1588:
case 1895:
case 3321:
case 3918:
case 1350:
case 2811:
case 2316:
case 3757:
case 2181:
case 2000:
case 4033:
case 3437:
case 3948:
case 323:
case 2224:
case 108:
case 564:
case 3986:
case 872:
case 2860:
case 839:
case 3128:
case 2671:
case 4032:
case 1823:
case 587:
case 3015:
case 744:
case 2074:
case 4002:
case 2640:
case 3543:
case 3605:
case 3337:
case 1730:
case 234:
case 2154:
case 2870:
case 3236:
case 2661:
case 2957:
case 398:
case 1516:
case 1086:
case 586:
case 2550:
case 1110:
case 3234:
case 919:
case 715:
case 1514:
case 1478:
case 1084:
case 648:
case 2076:
case 2138:
case 449:
case 3772:
case 3689:
case 1219:
case 1880:
case 2444:
case 707:
case 1378:
case 3817:
case 2327:
case 2751:
case 4049:
case 215:
case 2344:
case 2797:
case 3762:
case 2226:
case 638:
case 706:
case 1531:
case 3984:
case 1681:
case 2668:
case 1864:
case 1041:
case 2262:
case 1129:
case 3297:
case 1060:
case 1220:
case 3:
case 3251:
case 2998:
case 2481:
case 1325:
case 2263:
case 2592:
case 3567:
case 2116:
case 1874:
case 3121:
case 339:
case 2272:
case 711:
case 3049:
case 1070:
case 928:
case 2886:
case 372:
case 2273:
case 1259:
case 2734:
case 773:
case 3218:
case 186:
case 2736:
case 3032:
case 1955:
case 2114:
case 17:
case 3479:
case 1371:
case 2101:
case 667:
case 1283:
case 1903:
case 3033:
case 2917:
case 423:
case 1461:
case 187:
case 3747:
case 498:
case 3003:
case 1933:
case 1866:
case 666:
case 164:
case 3469:
case 551:
case 1361:
case 2706:
case 3002:
case 1932:
case 3055:
case 3724:
case 2408:
case 2571:
case 1215:
case 735:
case 482:
case 2356:
case 3717:
case 3535:
case 3958:
case 70:
case 2851:
case 1168:
case 245:
case 328:
case 3487:
case 2257:
case 4083:
case 2897:
case 161:
case 972:
case 2338:
case 3642:
case 3873:
case 2127:
case 100:
case 2308:
case 1036:
case 1178:
case 1616:
case 3248:
case 3906:
case 949:
case 3643:
case 419:
case 2947:
case 618:
case 3552:
case 1058:
case 3798:
case 3589:
case 2188:
case 714:
case 58:
case 2525:
case 1830:
case 3284:
case 2454:
case 2770:
case 4020:
case 1034:
case 630:
case 2926:
case 1601:
case 2818:
case 3328:
case 819:
case 1492:
case 576:
case 1614:
case 2741:
case 1631:
case 3934:
case 882:
case 633:
case 2760:
case 1919:
case 3609:
case 3428:
case 1392:
case 1800:
case 214:
case 2223:
case 1365:
case 2339:
case 1847:
case 1260:
case 1475:
case 2062:
case 3959:
case 1677:
case 2222:
case 3766:
case 1169:
case 3171:
case 2409:
case 1059:
case 1997:
case 2152:
case 1590:
case 2105:
case 803:
case 3140:
case 1270:
case 951:
case 1194:
case 861:
case 4004:
case 38:
case 2072:
case 2309:
case 3654:
case 2819:
case 3450:
case 1421:
case 3233:
case 4006:
case 403:
case 3329:
case 3656:
case 2507:
case 2385:
case 1083:
case 1513:
case 2189:
case 182:
case 3799:
case 1512:
case 3638:
case 3764:
case 354:
case 3202:
case 1918:
case 1321:
case 528:
case 662:
case 2343:
case 1045:
case 1791:
case 400:
case 2930:
case 2687:
case 2715:
case 1206:
case 976:
case 308:
case 2057:
case 1986:
case 98:
case 3700:
case 1015:
case 2177:
case 1307:
case 2694:
case 1898:
case 1543:
case 1605:
case 3915:
case 3193:
case 22:
case 3730:
case 120:
case 1407:
case 455:
case 198:
case 2167:
case 3516:
case 487:
case 1653:
case 2782:
case 3368:
case 1234:
case 954:
case 2759:
case 3514:
case 4060:
case 2832:
case 3084:
case 2696:
case 2565:
case 1539:
case 2833:
case 3219:
case 965:
case 2976:
case 1763:
case 87:
case 1817:
case 3468:
case 2803:
case 2720:
case 797:
case 1204:
case 296:
case 1187:
case 2390:
case 1211:
case 886:
case 1762:
case 549:
case 2295:
case 2855:
case 3681:
case 2802:
case 1970:
case 3795:
case 2528:
case 1726:
case 149:
case 1297:
case 1396:
case 2389:
case 3060:
case 1:
case 3220:
case 2815:
case 1567:
case 2719:
case 2098:
case 1121:
case 3150:
case 3627:
case 2142:
case 3425:
case 3644:
case 961:
case 172:
case 1496:
case 3899:
case 808:
case 2143:
case 903:
case 598:
case 2405:
case 1218:
case 3282:
case 1612:
case 3538:
case 1032:
case 37:
case 451:
case 408:
case 2230:
case 609:
case 3903:
case 1613:
case 1033:
case 2335:
case 1747:
case 4086:
case 3340:
case 2587:
case 355:
case 2017:
case 3933:
case 2352:
case 4048:
case 1469:
case 2435:
case 3361:
case 2109:
case 652:
case 1379:
case 3471:
case 1724:
case 2353:
case 1055:
case 3932:
case 4018:
case 2047:
case 1863:
case 2569:
case 1717:
case 3310:
case 519:
case 876:
case 1862:
case 1487:
case 2755:
case 1936:
case 2264:
case 3006:
case 303:
case 465:
case 582:
case 1873:
case 2859:
case 2299:
case 2621:
case 3178:
case 300:
case 3616:
case 1906:
case 1248:
case 2579:
case 1643:
case 1872:
case 2594:
case 1552:
case 2190:
case 1387:
case 2274:
case 1505:
case 1798:
case 727:
case 1589:
case 1639:
case 1019:
case 2596:
case 2112:
case 2749:
case 759:
case 865:
case 3493:
case 2883:
case 854:
case 1284:
case 3034:
case 2882:
case 1904:
case 3601:
case 3614:
case 1911:
case 202:
case 1328:
case 1137:
case 986:
case 726:
case 3581:
case 3722:
case 1934:
case 3004:
case 259:
case 97:
case 3919:
case 2845:
case 1428:
case 227:
case 2477:
case 3096:
case 687:
case 2792:
case 1118:
case 1360:
case 655:
case 2239:
case 1265:
case 3813:
case 510:
case 1025:
case 1846:
case 664:
case 166:
case 3449:
case 2130:
case 352:
case 2684:
case 2322:
case 1888:
case 1595:
case 1370:
case 2100:
case 3777:
case 184:
case 2423:
case 686:
case 1666:
case 2081:
case 3526:
case 67:
case 2422:
case 167:
case 2209:
case 3349:
case 1441:
case 3691:
case 1994:
case 3547:
case 3940:
case 2285:
case 175:
case 3229:
case 2952:
case 1197:
case 4007:
case 1664:
case 3961:
case 1151:
case 3120:
case 268:
case 3657:
case 3524:
case 1708:
case 2648:
case 753:
case 1844:
case 3890:
case 3302:
case 3079:
case 2536:
case 15:
case 2878:
case 1040:
case 3432:
case 2558:
case 3303:
case 1827:
case 1969:
case 2935:
case 2243:
case 717:
case 2212:
case 1458:
case 1814:
case 2618:
case 3753:
case 2176:
case 133:
case 2038:
case 1207:
case 140:
case 3839:
case 2056:
case 3705:
case 216:
case 1987:
case 1010:
case 1406:
case 716:
case 3735:
case 1600:
case 3910:
case 74:
case 1336:
case 2008:
case 574:
case 2541:
case 3662:
case 3993:
case 600:
case 1334:
case 4065:
case 3028:
case 118:
case 2967:
case 1523:
case 3885:
case 1186:
case 3843:
case 2199:
case 3672:
case 2725:
case 2054:
case 2570:
case 3842:
case 661:
case 1816:
case 556:
case 2174:
case 2850:
case 1397:
case 1975:
case 654:
case 362:
case 2001:
case 4028:
case 3132:
case 3225:
case 1576:
case 2909:
case 3320:
case 1351:
case 3459:
case 1296:
case 665:
case 1856:
case 1727:
case 2939:
case 157:
case 3155:
case 3102:
case 185:
case 518:
case 3420:
case 3103:
case 1695:
case 581:
case 3626:
case 2031:
case 1808:
case 2604:
case 530:
case 2123:
case 174:
case 3877:
case 1160:
case 3950:
case 3624:
case 2606:
case 3557:
case 68:
case 1029:
case 2122:
case 2943:
case 2235:
case 3591:
case 3647:
case 1141:
case 2330:
case 3383:
case 3271:
case 3929:
case 2252:
case 3867:
case 3345:
case 16:
case 1574:
case 2985:
case 3240:
case 2300:
case 1170:
case 1854:
case 2658:
case 2253:
case 3483:
case 2893:
case 2548:
case 763:
case 260:
case 3261:
case 2586:
case 1050:
case 1788:
case 2016:
case 3210:
case 3889:
case 3743:
case 1937:
case 2825:
case 3007:
case 1530:
case 138:
case 704:
case 2750:
case 3415:
case 1348:
case 1881:
case 2912:
case 852:
case 171:
case 4094:
case 1386:
case 1104:
case 575:
case 148:
case 1287:
case 1111:
case 4079:
case 2913:
case 3037:
case 1500:
case 3617:
case 746:
case 452:
case 3978:
case 3835:
case 1623:
case 2551:
case 2466:
case 71:
case 236:
case 2597:
case 2641:
case 1622:
case 2861:
case 1158:
case 3573:
case 747:
case 2366:
case 2044:
case 736:
case 566:
case 1714:
case 651:
case 3698:
case 3739:
case 110:
case 2027:
case 246:
case 3805:
case 3014:
case 3001:
case 1472:
case 3634:
case 2790:
case 3180:
case 2133:
case 1362:
case 2320:
case 2459:
case 3810:
case 3909:
case 1619:
case 2065:
case 3778:
case 1363:
case 2225:
case 579:
case 1462:
case 1009:
case 2102:
case 3939:
case 1914:
case 3604:
case 2626:
case 3031:
case 532:
case 4054:
case 2103:
case 1117:
case 1281:
case 358:
case 2557:
case 363:
case 1916:
case 1828:
case 301:
case 2950:
case 2624:
case 2877:
case 416:
case 2271:
case 1737:
case 1085:
case 3330:
case 2591:
case 2647:
case 937:
case 4038:
case 3943:
case 3658:
case 595:
case 2929:
case 1043:
case 3252:
case 2482:
case 2345:
case 43:
case 360:
case 191:
case 3548:
case 3430:
case 3253:
case 2483:
case 2149:
case 2007:
case 1633:
case 2315:
case 3825:
case 1896:
case 669:
case 3499:
case 2210:
case 1721:
case 3518:
case 3474:
case 2119:
case 1012:
case 3364:
case 3046:
case 2742:
case 1238:
case 696:
case 1655:
case 521:
case 3399:
case 1988:
case 1208:
case 2415:
case 304:
case 3913:
case 2037:
case 1545:
case 3729:
case 1126:
case 125:
case 450:
case 1520:
case 3551:
case 3466:
case 62:
case 2563:
case 3376:
case 960:
case 2562:
case 3597:
case 1775:
case 336:
case 963:
case 868:
case 1879:
case 2853:
case 2293:
case 1559:
case 3366:
case 3861:
case 1090:
case 2968:
case 3670:
case 2805:
case 3027:
case 2698:
case 2739:
case 1894:
case 4081:
case 3239:
case 2813:
case 905:
case 2182:
case 2096:
case 447:
case 3792:
case 1498:
case 1981:
case 3534:
case 252:
case 804:
case 3130:
case 1214:
case 2145:
case 94:
case 2526:
case 3504:
case 1728:
case 446:
case 3423:
case 752:
case 916:
case 2349:
case 2925:
case 1398:
case 3989:
case 2229:
case 1162:
case 846:
case 3952:
case 1615:
case 525:
case 3905:
case 3285:
case 4088:
case 837:
case 2547:
case 81:
case 2524:
case 1163:
case 3506:
case 368:
case 2657:
case 353:
case 2961:
case 2120:
case 121:
case 3242:
case 2355:
case 3536:
case 3686:
case 1172:
case 594:
case 2079:
case 836:
case 2433:
case 2250:
case 1216:
case 2159:
case 1052:
case 3710:
case 3558:
case 3176:
case 1246:
case 1682:
case 3618:
case 1324:
case 1532:
case 3212:
case 3761:
case 195:
case 2752:
case 1533:
case 1683:
case 1347:
case 1794:
case 401:
case 463:
case 2910:
case 3166:
case 2735:
case 460:
case 3771:
case 2809:
case 4016:
case 124:
case 626:
case 317:
case 3008:
case 2028:
case 860:
case 950:
case 2885:
case 1620:
case 1954:
case 1157:
case 2992:
case 3829:
case 2319:
case 1426:
case 3560:
case 3054:
case 2278:
case 1227:
case 69:
case 142:
case 1796:
case 1067:
case 3199:
case 2672:
case 2598:
case 3290:
case 1244:
case 863:
case 953:
case 2673:
case 3977:
case 2129:
case 188:
case 1262:
case 1022:
case 1711:
case 3528:
case 515:
case 3185:
case 2041:
case 2795:
case 507:
case 1023:
case 3815:
case 2949:
case 1481:
case 111:
case 2554:
case 1272:
case 3098:
case 99:
case 2259:
case 1734:
case 2899:
case 3143:
case 668:
case 469:
case 1273:
case 522:
case 2425:
case 1848:
case 1593:
case 170:
case 2440:
case 2688:
case 1884:
case 2282:
case 3452:
case 2646:
case 896:
case 3405:
case 1080:
case 2461:
case 927:
case 787:
case 1510:
case 4057:
case 2283:
case 3453:
case 3230:
case 959:
case 869:
case 1114:
case 27:
case 755:
case 3017:
case 3352:
case 3980:
case 3587:
case 255:
case 287:
case 3200:
case 2508:
case 173:
case 1706:
case 2471:
case 3435:
case 2361:
case 42:
case 264:
case 3820:
case 2168:
case 1851:
case 3703:
case 541:
case 3569:
case 3047:
case 1629:
case 3702:
case 2006:
case 1338:
case 261:
case 3264:
case 1257:
case 578:
case 1897:
case 1650:
case 1924:
case 200:
case 1308:
case 3859:
case 3299:
case 1561:
case 1456:
case 761:
case 3190:
case 3274:
case 1144:
case 2780:
case 3733:
case 10:
case 1540:
case 2493:
case 3883:
case 3749:
case 1146:
case 3112:
case 326:
case 2601:
case 2614:
case 2034:
case 3113:
case 3995:
case 1770:
case 3377:
case 1454:
case 2581:
case 2631:
case 3026:
case 1095:
case 1741:
case 616:
case 327:
case 3477:
case 2800:
case 4073:
case 2723:
case 2919:
case 3845:
case 359:
case 2051:
case 514:
case 426:
case 277:
case 3339:
case 402:
case 2171:
case 1301:
case 776:
case 1806:
case 183:
case 592:
case 1568:
case 3062:
case 2959:
case 3222:
case 2766:
case 3135:
case 658:
case 2140:
case 3105:
case 3073:
case 1962:
case 2544:
case 777:
case 1858:
case 2920:
case 2654:
case 1401:
case 1414:
case 4026:
case 28:
case 1578:
case 1963:
case 3900:
case 827:
case 50:
case 3385:
case 1030:
case 3442:
case 2774:
case 535:
case 1416:
case 859:
case 765:
case 3819:
case 2233:
case 2329:
case 1834:
case 2799:
case 2638:
case 2018:
case 1786:
case 4047:
case 1748:
case 996:
case 1316:
case 178:
case 802:
case 1804:
case 1811:
case 2608:
case 254:
case 2895:
case 3485:
case 3687:
case 1000:
case 3343:
case 141:
case 1181:
case 251:
case 1388:
case 2822:
case 1224:
case 573:
case 3669:
case 3177:
case 2823:
case 2700:
case 144:
case 3313:
case 1529:
case 3745:
case 3091:
case 3849:
case 1488:
case 1991:
case 2086:
case 3521:
case 2192:
case 2516:
case 1154:
case 3964:
case 4017:
case 708:
case 2048:
case 2501:
case 3832:
case 3966:
case 3759:
case 1156:
case 106:
case 122:
case 2110:
case 604:
case 1625:
case 1444:
case 2219:
case 3490:
case 397:
case 1138:
case 3803:
case 1751:
case 3720:
case 2468:
case 1327:
case 2378:
case 107:
case 3976:
case 2681:
case 3295:
case 3855:
case 588:
case 1344:
case 396:
case 3575:
case 3390:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760328001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,];
var gg_b = "1760328001/";

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
