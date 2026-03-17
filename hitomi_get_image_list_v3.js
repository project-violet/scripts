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
case 3616:
case 339:
case 3253:
case 1983:
case 1142:
case 3590:
case 1866:
case 192:
case 1769:
case 682:
case 871:
case 116:
case 1427:
case 2017:
case 73:
case 3723:
case 378:
case 393:
case 684:
case 35:
case 466:
case 194:
case 1122:
case 2091:
case 543:
case 3018:
case 3965:
case 4064:
case 2833:
case 3106:
case 2496:
case 3437:
case 3743:
case 2214:
case 4095:
case 203:
case 457:
case 743:
case 2094:
case 626:
case 2918:
case 2229:
case 2475:
case 2536:
case 3597:
case 3298:
case 1582:
case 269:
case 637:
case 1420:
case 1756:
case 2316:
case 1859:
case 215:
case 836:
case 4061:
case 903:
case 2297:
case 3236:
case 1341:
case 3529:
case 1246:
case 4080:
case 3331:
case 608:
case 3917:
case 969:
case 3511:
case 1563:
case 2952:
case 2598:
case 2774:
case 2285:
case 915:
case 53:
case 2984:
case 246:
case 1579:
case 130:
case 49:
case 2442:
case 938:
case 3148:
case 3081:
case 1500:
case 823:
case 1138:
case 485:
case 633:
case 2967:
case 3486:
case 907:
case 3968:
case 1904:
case 946:
case 1012:
case 2422:
case 2580:
case 3844:
case 728:
case 3409:
case 2659:
case 1834:
case 3470:
case 1213:
case 3060:
case 3366:
case 1656:
case 1175:
case 2915:
case 64:
case 1507:
case 476:
case 2731:
case 1633:
case 1292:
case 3588:
case 3643:
case 145:
case 1208:
case 3295:
case 1831:
case 3841:
case 3359:
case 3084:
case 1669:
case 3716:
case 2587:
case 2981:
case 3821:
case 2140:
case 2288:
case 368:
case 3067:
case 1773:
case 2595:
case 2202:
case 448:
case 2298:
case 3211:
case 1644:
case 3856:
case 315:
case 1472:
case 104:
case 3094:
case 2003:
case 1062:
case 1373:
case 941:
case 3475:
case 3536:
case 2597:
case 3065:
case 2991:
case 3229:
case 3952:
case 3598:
case 1282:
case 2917:
case 3502:
case 1177:
case 1624:
case 2430:
case 3774:
case 3249:
case 1083:
case 1526:
case 1239:
case 656:
case 427:
case 2529:
case 2331:
case 102:
case 2236:
case 241:
case 188:
case 980:
case 1186:
case 2723:
case 3017:
case 278:
case 1823:
case 2514:
case 2189:
case 993:
case 2334:
case 667:
case 2145:
case 2616:
case 2132:
case 866:
case 2590:
case 1619:
case 1170:
case 1843:
case 3833:
case 2106:
case 170:
case 1641:
case 2743:
case 3496:
case 1109:
case 3631:
case 2437:
case 471:
case 2994:
case 293:
case 939:
case 2125:
case 3290:
case 56:
case 3091:
case 1428:
case 2965:
case 1741:
case 160:
case 609:
case 2643:
case 968:
case 849:
case 3960:
case 3120:
case 2295:
case 2374:
case 663:
case 3478:
case 461:
case 714:
case 1912:
case 4090:
case 1592:
case 3288:
case 3140:
case 3873:
case 1130:
case 1508:
case 3564:
case 2477:
case 558:
case 2623:
case 1721:
case 2067:
case 796:
case 876:
case 111:
case 712:
case 2359:
case 1719:
case 2084:
case 1251:
case 3981:
case 2819:
case 3666:
case 2716:
case 677:
case 2486:
case 1513:
case 3967:
case 4085:
case 1333:
case 307:
case 3984:
case 346:
case 1445:
case 596:
case 2280:
case 2409:
case 1137:
case 2844:
case 2060:
case 3199:
case 1406:
case 885:
case 379:
case 1279:
case 423:
case 1993:
case 1057:
case 89:
case 621:
case 2276:
case 3422:
case 1375:
case 2005:
case 3174:
case 620:
case 1011:
case 3063:
case 3473:
case 1777:
case 4001:
case 1265:
case 4057:
case 830:
case 562:
case 2026:
case 3262:
case 1294:
case 954:
case 1637:
case 375:
case 889:
case 3647:
case 3699:
case 1097:
case 322:
case 2046:
case 2340:
case 1503:
case 3039:
case 2562:
case 1953:
case 1049:
case 3283:
case 2143:
case 110:
case 2870:
case 845:
case 2255:
case 3348:
case 1338:
case 2982:
case 2706:
case 613:
case 1936:
case 2725:
case 4050:
case 1518:
case 10:
case 411:
case 2939:
case 1825:
case 764:
case 2327:
case 3640:
case 2424:
case 1630:
case 3328:
case 1014:
case 3171:
case 460:
case 1552:
case 1902:
case 1786:
case 1889:
case 2123:
case 2732:
case 1291:
case 762:
case 1845:
case 1396:
case 3926:
case 386:
case 1961:
case 470:
case 1686:
case 1567:
case 2830:
case 2689:
case 281:
case 617:
case 816:
case 235:
case 892:
case 772:
case 1119:
case 1584:
case 1670:
case 3456:
case 2606:
case 3720:
case 488:
case 3131:
case 1609:
case 3250:
case 774:
case 894:
case 2772:
case 3007:
case 981:
case 3051:
case 2625:
case 2954:
case 2504:
case 935:
case 3345:
case 3134:
case 3799:
case 1144:
case 319:
case 3433:
case 1737:
case 240:
case 136:
case 2557:
case 71:
case 2501:
case 2951:
case 3:
case 3389:
case 2728:
case 3054:
case 127:
case 2013:
case 1677:
case 1964:
case 3306:
case 572:
case 2212:
case 1987:
case 404:
case 3838:
case 2946:
case 1997:
case 3725:
case 986:
case 3327:
case 3939:
case 1722:
case 1133:
case 1985:
case 3143:
case 3870:
case 2620:
case 3706:
case 3809:
case 2348:
case 1742:
case 1337:
case 1169:
case 1218:
case 811:
case 1929:
case 176:
case 3745:
case 4093:
case 2842:
case 1735:
case 286:
case 2905:
case 3424:
case 2328:
case 3789:
case 2555:
case 2171:
case 3963:
case 445:
case 922:
case 352:
case 4012:
case 224:
case 3320:
case 3583:
case 1638:
case 3026:
case 1914:
case 489:
case 1002:
case 2063:
case 2627:
case 2372:
case 3046:
case 3340:
case 3628:
case 1036:
case 222:
case 153:
case 354:
case 2039:
case 924:
case 19:
case 275:
case 2647:
case 1431:
case 1696:
case 732:
case 650:
case 185:
case 1510:
case 695:
case 2699:
case 1156:
case 4058:
case 2512:
case 3951:
case 3907:
case 1281:
case 2:
case 583:
case 3557:
case 3501:
case 1386:
case 2054:
case 644:
case 590:
case 219:
case 555:
case 2134:
case 2345:
case 2747:
case 3258:
case 1899:
case 2433:
case 1796:
case 2201:
case 1076:
case 1370:
case 3748:
case 2306:
case 1466:
case 9:
case 2838:
case 1215:
case 1471:
case 1260:
case 919:
case 965:
case 1827:
case 3116:
case 3645:
case 3550:
case 1087:
case 1635:
case 1642:
case 3632:
case 166:
case 1173:
case 1840:
case 1064:
case 3689:
case 3092:
case 2740:
case 1474:
case 3772:
case 492:
case 2007:
case 2875:
case 2051:
case 416:
case 2593:
case 783:
case 1775:
case 3504:
case 1568:
case 3625:
case 3954:
case 2456:
case 2720:
case 4055:
case 1820:
case 755:
case 870:
case 790:
case 3794:
case 1601:
case 174:
case 3139:
case 527:
case 982:
case 1762:
case 1803:
case 2862:
case 2615:
case 3765:
case 2146:
case 536:
case 3182:
case 859:
case 2488:
case 3487:
case 2126:
case 1783:
case 2966:
case 891:
case 1129:
case 172:
case 2971:
case 83:
case 125:
case 3464:
case 2368:
case 398:
case 2105:
case 1492:
case 1650:
case 1545:
case 46:
case 1532:
case 2684:
case 3542:
case 3855:
case 3071:
case 3270:
case 2586:
case 3209:
case 937:
case 1852:
case 843:
case 3480:
case 603:
case 3668:
case 2718:
case 226:
case 1604:
case 3791:
case 2570:
case 1506:
case 3381:
case 4030:
case 669:
case 2043:
case 908:
case 1446:
case 3768:
case 3575:
case 3436:
case 50:
case 951:
case 3691:
case 2449:
case 3151:
case 1572:
case 2485:
case 828:
case 4086:
case 1188:
case 1240:
case 458:
case 2934:
case 299:
case 510:
case 47:
case 2275:
case 806:
case 1019:
case 2784:
case 723:
case 2310:
case 1426:
case 1884:
case 607:
case 4070:
case 2192:
case 1867:
case 2108:
case 2652:
case 3402:
case 999:
case 233:
case 4009:
case 2767:
case 3498:
case 1021:
case 2394:
case 3303:
case 3179:
case 0:
case 3538:
case 1683:
case 2781:
case 3916:
case 1247:
case 3237:
case 3858:
case 1973:
case 2857:
case 1528:
case 2801:
case 1355:
case 3665:
case 496:
case 164:
case 2603:
case 3453:
case 70:
case 2317:
case 1757:
case 363:
case 1662:
case 1860:
case 4077:
case 3034:
case 1044:
case 1357:
case 2270:
case 2717:
case 3667:
case 3023:
case 3586:
case 1301:
case 2461:
case 3752:
case 2071:
case 2855:
case 3974:
case 308:
case 2315:
case 2066:
case 3222:
case 2535:
case 2476:
case 641:
case 3684:
case 1225:
case 1479:
case 256:
case 757:
case 443:
case 2286:
case 3570:
case 3509:
case 1289:
case 1891:
case 1232:
case 2668:
case 1693:
case 3242:
case 1056:
case 2277:
case 3660:
case 998:
case 155:
case 680:
case 3488:
case 2943:
case 1810:
case 190:
case 2059:
case 2384:
case 273:
case 3703:
case 2794:
case 2139:
case 491:
case 1407:
case 2367:
case 65:
case 3862:
case 2578:
case 3146:
case 3615:
case 2765:
case 1102:
case 678:
case 2495:
case 3971:
case 829:
case 2163:
case 3105:
case 2074:
case 1304:
case 298:
case 3368:
case 1658:
case 382:
case 3126:
case 2487:
case 3681:
case 267:
case 3391:
case 1921:
case 2858:
case 3113:
case 1919:
case 4078:
case 3931:
case 1547:
case 3537:
case 1941:
case 2596:
case 209:
case 749:
case 1599:
case 531:
case 977:
case 553:
case 263:
case 3238:
case 2352:
case 3603:
case 2453:
case 814:
case 1180:
case 731:
case 3485:
case 1520:
case 1383:
case 785:
case 399:
case 1482:
case 3618:
case 2768:
case 2436:
case 4035:
case 2151:
case 4042:
case 2893:
case 447:
case 79:
case 3449:
case 406:
case 3108:
case 3530:
case 1655:
case 3365:
case 1540:
case 3192:
case 2498:
case 428:
case 1463:
case 1362:
case 3652:
case 333:
case 1195:
case 1073:
case 3784:
case 3850:
case 351:
case 921:
case 3310:
case 1272:
case 395:
case 434:
case 128:
case 2533:
case 350:
case 920:
case 1223:
case 3118:
case 2191:
case 3269:
case 2651:
case 2607:
case 3457:
case 1243:
case 220:
case 1155:
case 1695:
case 1571:
case 147:
case 2569:
case 730:
case 1042:
case 106:
case 1566:
case 1035:
case 1574:
case 3705:
case 1863:
case 905:
case 1702:
case 3256:
case 618:
case 3613:
case 1661:
case 862:
case 2932:
case 2945:
case 1676:
case 2600:
case 530:
case 913:
case 1882:
case 205:
case 1559:
case 2782:
case 1078:
case 2654:
case 213:
case 2739:
case 2836:
case 1680:
case 864:
case 3897:
case 159:
case 2682:
case 1534:
case 2047:
case 2224:
case 1390:
case 1112:
case 1854:
case 874:
case 3115:
case 3646:
case 917:
case 2880:
case 1636:
case 455:
case 1417:
case 2663:
case 490:
case 1761:
case 2027:
case 1930:
case 3605:
case 2455:
case 2861:
case 3940:
case 3524:
case 483:
case 635:
case 1776:
case 2700:
case 3626:
case 681:
case 2876:
case 191:
case 1800:
case 4033:
case 2864:
case 3339:
case 1349:
case 2241:
case 1397:
case 3708:
case 2895:
case 2040:
case 3483:
case 2948:
case 3519:
case 2887:
case 342:
case 1410:
case 640:
case 2221:
case 3999:
case 1531:
case 3541:
case 1937:
case 3363:
case 2751:
case 344:
case 2707:
case 3072:
case 143:
case 81:
case 1807:
case 1193:
case 2928:
case 2219:
case 711:
case 3932:
case 1826:
case 686:
case 112:
case 3600:
case 1183:
case 3945:
case 3898:
case 1259:
case 4044:
case 1467:
case 1711:
case 2351:
case 1077:
case 1805:
case 3493:
case 1364:
case 2404:
case 2849:
case 2746:
case 3836:
case 3739:
case 1922:
case 1749:
case 1162:
case 3556:
case 4024:
case 1387:
case 3782:
case 1415:
case 3191:
case 3853:
case 1978:
case 1266:
case 17:
case 3651:
case 3313:
case 1543:
case 250:
case 1688:
case 1009:
case 3533:
case 1070:
case 2006:
case 1271:
case 2032:
case 3569:
case 1790:
case 2890:
case 2045:
case 1481:
case 158:
case 2233:
case 995:
case 2692:
case 320:
case 2089:
case 1714:
case 2354:
case 2608:
case 4041:
case 3117:
case 1086:
case 2814:
case 944:
case 2483:
case 1516:
case 3948:
case 2519:
case 3887:
case 1690:
case 2927:
case 3573:
case 1808:
case 2339:
case 3864:
case 3040:
case 2792:
case 2708:
case 1030:
case 588:
case 704:
case 2462:
case 244:
case 3707:
case 3928:
case 3219:
case 3305:
case 942:
case 1104:
case 3221:
case 570:
case 3326:
case 2888:
case 2541:
case 2947:
case 1101:
case 1157:
case 472:
case 1697:
case 2028:
case 3754:
case 504:
case 2646:
case 425:
case 2160:
case 2544:
case 3682:
case 890:
case 855:
case 2626:
case 2181:
case 502:
case 317:
case 1629:
case 3876:
case 3779:
case 3663:
case 2713:
case 788:
case 1234:
case 1813:
case 421:
case 2687:
case 851:
case 707:
case 2042:
case 3790:
case 247:
case 1569:
case 2571:
case 3086:
case 2977:
case 4031:
case 1458:
case 2243:
case 3714:
case 1412:
case 3266:
case 1607:
case 1651:
case 3361:
case 947:
case 906:
case 3978:
case 738:
case 2223:
case 3460:
case 899:
case 3271:
case 779:
case 3543:
case 3009:
case 228:
case 3688:
case 2680:
case 477:
case 538:
case 1836:
case 3162:
case 3749:
case 3846:
case 84:
case 1493:
case 2736:
case 1654:
case 1925:
case 3364:
case 2839:
case 2468:
case 1308:
case 60:
case 1110:
case 1556:
case 1906:
case 1782:
case 2559:
case 105:
case 2882:
case 546:
case 3935:
case 507:
case 3729:
case 3484:
case 1932:
case 312:
case 3942:
case 3711:
case 1763:
case 3467:
case 2798:
case 2986:
case 2863:
case 409:
case 2574:
case 117:
case 473:
case 1779:
case 1700:
case 671:
case 882:
case 2879:
case 2158:
case 1861:
case 1455:
case 2930:
case 2761:
case 1027:
case 959:
case 3353:
case 1244:
case 329:
case 2698:
case 3234:
case 23:
case 2602:
case 2636:
case 2314:
case 503:
case 884:
case 3975:
case 467:
case 2780:
case 2854:
case 3101:
case 1639:
case 2112:
case 3649:
case 1972:
case 3037:
case 569:
case 3685:
case 1047:
case 93:
case 2534:
case 498:
case 4074:
case 259:
case 1305:
case 2465:
case 1928:
case 3104:
case 2193:
case 1168:
case 826:
case 36:
case 3302:
case 456:
case 243:
case 2216:
case 627:
case 3398:
case 1751:
case 2494:
case 2653:
case 3403:
case 703:
case 4071:
case 2531:
case 837:
case 2329:
case 1221:
case 2410:
case 1020:
case 769:
case 3690:
case 3938:
case 1948:
case 3150:
case 1040:
case 3614:
case 2764:
case 648:
case 1864:
case 1885:
case 2387:
case 2162:
case 863:
case 2846:
case 2395:
case 2749:
case 2922:
case 1746:
case 1404:
case 3839:
case 2364:
case 3736:
case 912:
case 2805:
case 3986:
case 3702:
case 2077:
case 1613:
case 2467:
case 2259:
case 3863:
case 1811:
case 3676:
case 2183:
case 1829:
case 2935:
case 212:
case 2942:
case 44:
case 3388:
case 797:
case 2729:
case 296:
case 3977:
case 2523:
case 3571:
case 1608:
case 499:
case 1089:
case 3664:
case 258:
case 597:
case 2481:
case 3687:
case 3035:
case 2790:
case 347:
case 1032:
case 2460:
case 3223:
case 328:
case 2543:
case 433:
case 3753:
case 1401:
case 27:
case 2266:
case 3022:
case 2978:
case 1118:
case 821:
case 4016:
case 653:
case 1025:
case 18:
case 3329:
case 2996:
case 1273:
case 408:
case 3193:
case 3075:
case 3851:
case 2104:
case 3807:
case 3465:
case 3653:
case 144:
case 3216:
case 3397:
case 2614:
case 2231:
case 1339:
case 578:
case 1167:
case 1927:
case 1184:
case 741:
case 142:
case 856:
case 3385:
case 201:
case 2150:
case 2938:
case 1382:
case 3930:
case 1605:
case 2813:
case 778:
case 898:
case 33:
case 2452:
case 3800:
case 3776:
case 1048:
case 739:
case 1181:
case 3038:
case 484:
case 2685:
case 2037:
case 929:
case 1544:
case 359:
case 2975:
case 3314:
case 3491:
case 1028:
case 3636:
case 2418:
case 3112:
case 2101:
case 1105:
case 2393:
case 225:
case 3198:
case 2969:
case 817:
case 616:
case 974:
case 182:
case 1966:
case 692:
case 1681:
case 4028:
case 355:
case 2185:
case 925:
case 1488:
case 390:
case 3810:
case 1660:
case 540:
case 3056:
case 1615:
case 3136:
case 2197:
case 972:
case 3612:
case 3865:
case 2657:
case 1703:
case 274:
case 2601:
case 3451:
case 137:
case 740:
case 1043:
case 200:
case 2956:
case 3454:
case 2604:
case 3693:
case 2358:
case 1718:
case 2525:
case 1235:
case 21:
case 442:
case 3817:
case 900:
case 2589:
case 108:
case 1586:
case 1667:
case 3357:
case 1023:
case 3206:
case 2190:
case 3479:
case 2545:
case 1222:
case 3400:
case 535:
case 334:
case 1767:
case 518:
case 2220:
case 133:
case 3195:
case 450:
case 1652:
case 2867:
case 820:
case 3164:
case 3540:
case 1192:
case 1365:
case 3924:
case 1016:
case 2750:
case 2426:
case 1310:
case 630:
case 3272:
case 752:
case 1850:
case 2019:
case 1784:
case 151:
case 3520:
case 3482:
case 1934:
case 689:
case 2041:
case 332:
case 2572:
case 3868:
case 3439:
case 1804:
case 754:
case 4032:
case 3793:
case 4045:
case 2044:
case 645:
case 3599:
case 805:
case 3547:
case 1537:
case 2860:
case 813:
case 2662:
case 2815:
case 3248:
case 1603:
case 2701:
case 264:
case 1715:
case 2355:
case 2528:
case 962:
case 1857:
case 2299:
case 3161:
case 1113:
case 2973:
case 2247:
case 1414:
case 718:
case 964:
case 1781:
case 387:
case 262:
case 3919:
case 1490:
case 2881:
case 3604:
case 2232:
case 2245:
case 844:
case 2153:
case 7:
case 2891:
case 300:
case 2289:
case 765:
case 4040:
case 1286:
case 1381:
case 2479:
case 3190:
case 2225:
case 1542:
case 602:
case 3545:
case 1360:
case 4020:
case 2817:
case 3589:
case 1071:
case 2301:
case 1717:
case 1270:
case 3129:
case 3969:
case 1464:
case 3492:
case 1074:
case 1163:
case 2198:
case 1923:
case 2102:
case 2894:
case 5:
case 1765:
case 1578:
case 1367:
case 3657:
case 2407:
case 374:
case 1794:
case 2451:
case 3601:
case 3762:
case 2865:
case 173:
case 3149:
case 1384:
case 290:
case 3185:
case 1277:
case 3757:
case 1694:
case 1453:
case 2712:
case 3815:
case 522:
case 163:
case 3528:
case 3355:
case 575:
case 1610:
case 3227:
case 3860:
case 3683:
case 287:
case 1538:
case 3548:
case 413:
case 2228:
case 2921:
case 3299:
case 405:
case 3024:
case 3247:
case 2272:
case 3884:
case 3750:
case 586:
case 3220:
case 2362:
case 234:
case 3021:
case 1498:
case 2540:
case 2924:
case 3405:
case 3867:
case 2164:
case 1893:
case 1151:
case 88:
case 121:
case 2793:
case 3704:
case 1691:
case 1768:
case 420:
case 3041:
case 232:
case 1230:
case 1031:
case 923:
case 2049:
case 353:
case 2953:
case 1562:
case 3594:
case 154:
case 838:
case 3565:
case 1046:
case 4081:
case 1628:
case 3036:
case 628:
case 3156:
case 3510:
case 2085:
case 1441:
case 3431:
case 3696:
case 1648:
case 3638:
case 1026:
case 1320:
case 1583:
case 2416:
case 223:
case 2265:
case 807:
case 2210:
case 3002:
case 2011:
case 3914:
case 1877:
case 2375:
case 4060:
case 551:
case 2832:
case 3735:
case 3169:
case 2396:
case 2845:
case 2090:
case 3337:
case 3929:
case 261:
case 1123:
case 3911:
case 2998:
case 2014:
case 910:
case 2630:
case 1424:
case 3053:
case 3949:
case 4084:
case 497:
case 1939:
case 3591:
case 961:
case 1809:
case 3434:
case 1444:
case 468:
case 2770:
case 3985:
case 2806:
case 4067:
case 1255:
case 1870:
case 599:
case 3568:
case 3775:
case 971:
case 1954:
case 439:
case 784:
case 1772:
case 526:
case 3820:
case 2141:
case 659:
case 1606:
case 537:
case 2119:
case 45:
case 135:
case 2268:
case 1550:
case 2976:
case 3087:
case 691:
case 1645:
case 3635:
case 1900:
case 1689:
case 3064:
case 3474:
case 63:
case 508:
case 1830:
case 2121:
case 2686:
case 3095:
case 3173:
case 3309:
case 357:
case 3215:
case 3370:
case 2987:
case 3738:
case 1212:
case 2964:
case 708:
case 3827:
case 936:
case 3260:
case 2677:
case 3471:
case 2322:
case 643:
case 2515:
case 726:
case 1728:
case 3281:
case 1907:
case 441:
case 1501:
case 2828:
case 3386:
case 815:
case 140:
case 2737:
case 2342:
case 948:
case 2335:
case 3847:
case 869:
case 2560:
case 1837:
case 3552:
case 1171:
case 2517:
case 3902:
case 3786:
case 949:
case 3889:
case 1555:
case 868:
case 3014:
case 1328:
case 3630:
case 186:
case 1926:
case 2735:
case 696:
case 4068:
case 276:
case 2929:
case 1835:
case 777:
case 3396:
case 3845:
case 2337:
case 2742:
case 249:
case 3770:
case 3217:
case 2434:
case 709:
case 2252:
case 3338:
case 310:
case 2985:
case 3709:
case 2133:
case 3806:
case 2722:
case 3825:
case 763:
case 2053:
case 2949:
case 2997:
case 1946:
case 2591:
case 976:
case 614:
case 2675:
case 2156:
case 2510:
case 285:
case 1082:
case 3637:
case 509:
case 1647:
case 175:
case 231:
case 3085:
case 29:
case 3503:
case 1039:
case 407:
case 3097:
case 122:
case 2330:
case 2778:
case 2565:
case 2098:
case 1063:
case 658:
case 1262:
case 953:
case 3416:
case 323:
case 438:
case 99:
case 3294:
case 124:
case 2203:
case 3265:
case 3029:
case 2990:
case 1992:
case 3124:
case 1558:
case 348:
case 1325:
case 469:
case 3964:
case 3995:
case 2061:
case 2260:
case 3677:
case 598:
case 2215:
case 257:
case 756:
case 1079:
case 3848:
case 2738:
case 3581:
case 1306:
case 567:
case 1257:
case 2076:
case 3737:
case 2796:
case 1433:
case 2899:
case 1747:
case 336:
case 2988:
case 1134:
case 3335:
case 2847:
case 573:
case 1054:
case 66:
case 2678:
case 957:
case 327:
case 3515:
case 2386:
case 3828:
case 1:
case 3141:
case 3609:
case 2459:
case 1131:
case 2267:
case 1456:
case 966:
case 1593:
case 2775:
case 85:
case 3980:
case 1051:
case 1875:
case 2474:
case 878:
case 3378:
case 798:
case 629:
case 2064:
case 2840:
case 2173:
case 2095:
case 371:
case 3268:
case 2642:
case 3976:
case 370:
case 1214:
case 2733:
case 1631:
case 3843:
case 2499:
case 2324:
case 3428:
case 1091:
case 916:
case 2122:
case 2962:
case 2055:
case 2871:
case 388:
case 1771:
case 625:
case 2427:
case 717:
case 216:
case 3619:
case 292:
case 2866:
case 4051:
case 3448:
case 672:
case 881:
case 2135:
case 12:
case 994:
case 1869:
case 3624:
case 1774:
case 3505:
case 2440:
case 419:
case 1952:
case 2563:
case 465:
case 3177:
case 1502:
case 2874:
case 1297:
case 4:
case 4054:
case 1249:
case 3239:
case 2205:
case 1634:
case 2859:
case 1316:
case 2756:
case 3644:
case 169:
case 1065:
case 1094:
case 304:
case 103:
case 2226:
case 4079:
case 3406:
case 2213:
case 179:
case 2834:
case 3369:
case 1659:
case 2196:
case 1147:
case 289:
case 3001:
case 1323:
case 854:
case 1580:
case 3200:
case 513:
case 2554:
case 3279:
case 3993:
case 424:
case 1561:
case 1127:
case 1967:
case 989:
case 3724:
case 2058:
case 1674:
case 2138:
case 4039:
case 2579:
case 1343:
case 852:
case 3254:
case 1984:
case 1595:
case 3958:
case 1873:
case 3592:
case 945:
case 3130:
case 3207:
case 1981:
case 3050:
case 1587:
case 2669:
case 2831:
case 2208:
case 2292:
case 2957:
case 2551:
case 486:
case 1068:
case 1915:
case 3004:
case 3341:
case 1236:
case 141:
case 1529:
case 2526:
case 2083:
case 2505:
case 3440:
case 1430:
case 2624:
case 440:
case 1917:
case 3874:
case 2282:
case 3563:
case 3178:
case 2546:
case 1597:
case 1549:
case 744:
case 8:
case 2062:
case 3539:
case 4013:
case 3205:
case 3319:
case 1298:
case 3582:
case 3859:
case 1018:
case 3324:
case 2428:
case 544:
case 3962:
case 193:
case 3122:
case 15:
case 3447:
case 2641:
case 270:
case 4008:
case 1106:
case 690:
case 2843:
case 655:
case 4092:
case 180:
case 2170:
case 392:
case 2619:
case 3769:
case 1590:
case 316:
case 1132:
case 1616:
case 1145:
case 542:
case 1334:
case 3983:
case 2448:
case 139:
case 3135:
case 1189:
case 2823:
case 3871:
case 178:
case 3055:
case 2186:
case 3673:
case 2050:
case 2356:
case 1819:
case 2207:
case 2816:
case 687:
case 3669:
case 1359:
case 211:
case 197:
case 1623:
case 3773:
case 960:
case 1821:
case 2130:
case 168:
case 2958:
case 2592:
case 3957:
case 3175:
case 1374:
case 3831:
case 1295:
case 550:
case 3292:
case 345:
case 260:
case 2200:
case 3012:
case 2001:
case 2057:
case 2993:
case 1968:
case 1015:
case 78:
case 1128:
case 3213:
case 1261:
case 1470:
case 4005:
case 2406:
case 1844:
case 2369:
case 3834:
case 1148:
case 824:
case 4046:
case 3950:
case 3500:
case 3138:
case 1081:
case 2445:
case 330:
case 3579:
case 2432:
case 2333:
case 1486:
case 634:
case 3058:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1773741602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,];
var gg_b = "1773741602/";

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
