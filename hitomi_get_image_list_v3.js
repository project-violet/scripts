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
case 1630:
case 277:
case 1409:
case 839:
case 1138:
case 30:
case 1695:
case 3386:
case 1849:
case 189:
case 2540:
case 371:
case 60:
case 1634:
case 101:
case 905:
case 3559:
case 2230:
case 1592:
case 3772:
case 2585:
case 3885:
case 2295:
case 2157:
case 2036:
case 3467:
case 2703:
case 2310:
case 3374:
case 3418:
case 2234:
case 1282:
case 1529:
case 748:
case 623:
case 2963:
case 1245:
case 3079:
case 1365:
case 981:
case 932:
case 237:
case 1111:
case 2684:
case 1632:
case 417:
case 2201:
case 2473:
case 1070:
case 2680:
case 682:
case 331:
case 3786:
case 3402:
case 2708:
case 1133:
case 2676:
case 3522:
case 284:
case 1601:
case 2232:
case 1284:
case 541:
case 2255:
case 3372:
case 1590:
case 2941:
case 1594:
case 354:
case 1280:
case 3616:
case 1905:
case 3599:
case 1329:
case 2870:
case 3574:
case 374:
case 2207:
case 807:
case 674:
case 1735:
case 3799:
case 1752:
case 3927:
case 1350:
case 1957:
case 3320:
case 1983:
case 3722:
case 2428:
case 205:
case 1392:
case 1664:
case 3570:
case 1790:
case 3359:
case 2340:
case 2260:
case 3090:
case 3586:
case 2508:
case 1022:
case 2938:
case 79:
case 3808:
case 1099:
case 104:
case 1335:
case 2049:
case 49:
case 626:
case 2872:
case 1729:
case 209:
case 1997:
case 2512:
case 1792:
case 1141:
case 3759:
case 15:
case 1215:
case 2785:
case 984:
case 3646:
case 1163:
case 580:
case 1836:
case 651:
case 3675:
case 2911:
case 1059:
case 2262:
case 3092:
case 4077:
case 281:
case 2744:
case 3971:
case 2615:
case 1988:
case 1024:
case 3050:
case 232:
case 2151:
case 937:
case 271:
case 3540:
case 3308:
case 20:
case 2639:
case 4033:
case 677:
case 1549:
case 518:
case 2840:
case 159:
case 760:
case 4011:
case 107:
case 1892:
case 3234:
case 3712:
case 3859:
case 268:
case 2977:
case 795:
case 3036:
case 1854:
case 3157:
case 1239:
case 2524:
case 2065:
case 3295:
case 2520:
case 1127:
case 3824:
case 1850:
case 3585:
case 1319:
case 3917:
case 3314:
case 3478:
case 1829:
case 2772:
case 2559:
case 3708:
case 155:
case 2786:
case 987:
case 3188:
case 3542:
case 1014:
case 2625:
case 223:
case 652:
case 1010:
case 337:
case 3684:
case 637:
case 2079:
case 2921:
case 352:
case 3822:
case 2599:
case 3303:
case 926:
case 2431:
case 596:
case 1566:
case 934:
case 1890:
case 640:
case 547:
case 3710:
case 3941:
case 163:
case 799:
case 3232:
case 1894:
case 3899:
case 3676:
case 1008:
case 1719:
case 3645:
case 1042:
case 3874:
case 2570:
case 1177:
case 801:
case 305:
case 4063:
case 2669:
case 1519:
case 87:
case 1696:
case 1879:
case 1458:
case 1766:
case 2799:
case 102:
case 3947:
case 139:
case 3344:
case 714:
case 3264:
case 672:
case 1493:
case 1269:
case 372:
case 2035:
case 2808:
case 2437:
case 3886:
case 2052:
case 3066:
case 1349:
case 175:
case 3508:
case 2586:
case 3260:
case 4041:
case 2448:
case 889:
case 3340:
case 3191:
case 3785:
case 3105:
case 2812:
case 1040:
case 4:
case 2572:
case 3626:
case 3512:
case 234:
case 414:
case 1044:
case 3872:
case 609:
case 3933:
case 1366:
case 1275:
case 3049:
case 954:
case 542:
case 1246:
case 2399:
case 593:
case 1536:
case 3151:
case 332:
case 681:
case 3423:
case 923:
case 550:
case 1749:
case 2461:
case 1906:
case 179:
case 357:
case 3744:
case 2029:
case 4017:
case 381:
case 982:
case 3342:
case 251:
case 166:
case 1487:
case 1453:
case 1121:
case 135:
case 1085:
case 931:
case 1865:
case 3290:
case 808:
case 3825:
case 886:
case 3584:
case 1222:
case 1589:
case 1973:
case 961:
case 2346:
case 165:
case 3252:
case 2375:
case 2266:
case 3642:
case 1855:
case 124:
case 3294:
case 2884:
case 1463:
case 3326:
case 153:
case 827:
case 190:
case 2405:
case 1796:
case 2622:
case 3816:
case 86:
case 225:
case 910:
case 4093:
case 2876:
case 1666:
case 978:
case 2845:
case 450:
case 1801:
case 264:
case 493:
case 1356:
case 1649:
case 1220:
case 3254:
case 1895:
case 1834:
case 3056:
case 1259:
case 3137:
case 750:
case 3640:
case 3229:
case 2909:
case 2539:
case 2491:
case 2775:
case 606:
case 688:
case 2249:
case 2369:
case 3726:
case 2128:
case 388:
case 4087:
case 742:
case 258:
case 1978:
case 883:
case 595:
case 1556:
case 2030:
case 3998:
case 3603:
case 3345:
case 2497:
case 511:
case 3265:
case 2095:
case 822:
case 1433:
case 1082:
case 3526:
case 133:
case 3102:
case 2325:
case 4081:
case 3380:
case 3406:
case 1923:
case 2488:
case 3113:
case 2815:
case 1411:
case 3846:
case 667:
case 32:
case 3953:
case 3384:
case 3987:
case 496:
case 1272:
case 2716:
case 3869:
case 958:
case 3118:
case 1286:
case 418:
case 2055:
case 2457:
case 470:
case 2483:
case 1864:
case 1080:
case 2670:
case 1619:
case 2569:
case 599:
case 3776:
case 2339:
case 1076:
case 2686:
case 3608:
case 303:
case 3100:
case 1274:
case 3780:
case 730:
case 1807:
case 1270:
case 3104:
case 1109:
case 2219:
case 2294:
case 3525:
case 856:
case 2642:
case 1187:
case 2096:
case 2252:
case 3346:
case 1069:
case 967:
case 262:
case 59:
case 1532:
case 2584:
case 3123:
case 2825:
case 1902:
case 1555:
case 3880:
case 821:
case 364:
case 1242:
case 1652:
case 2143:
case 3876:
case 1635:
case 1198:
case 3769:
case 2816:
case 3622:
case 2576:
case 833:
case 3007:
case 2326:
case 3491:
case 3775:
case 3539:
case 2148:
case 2250:
case 3746:
case 1904:
case 1534:
case 2229:
case 1530:
case 2137:
case 3062:
case 2056:
case 3882:
case 1285:
case 744:
case 2839:
case 3624:
case 658:
case 1762:
case 358:
case 2981:
case 1240:
case 1158:
case 1629:
case 3659:
case 3128:
case 206:
case 873:
case 1918:
case 1046:
case 1075:
case 3672:
case 890:
case 3034:
case 1943:
case 2265:
case 3497:
case 2603:
case 4009:
case 2998:
case 678:
case 610:
case 310:
case 3826:
case 2131:
case 186:
case 108:
case 2384:
case 1332:
case 962:
case 22:
case 2846:
case 3173:
case 2875:
case 3546:
case 3815:
case 1203:
case 1795:
case 3575:
case 441:
case 865:
case 661:
case 3488:
case 1734:
case 824:
case 361:
case 2380:
case 1212:
case 3569:
case 906:
case 3670:
case 1181:
case 1025:
case 2958:
case 3032:
case 3055:
case 2167:
case 3674:
case 2118:
case 2869:
case 1948:
case 1214:
case 1732:
case 1330:
case 1937:
case 1334:
case 3001:
case 1210:
case 2100:
case 1507:
case 876:
case 3725:
case 2608:
case 3686:
case 2279:
case 1395:
case 2139:
case 3548:
case 1893:
case 3713:
case 2408:
case 4001:
case 3182:
case 710:
case 3907:
case 778:
case 568:
case 849:
case 2773:
case 2410:
case 3474:
case 1969:
case 438:
case 218:
case 4055:
case 3247:
case 2528:
case 1858:
case 3960:
case 1013:
case 3470:
case 2414:
case 2378:
case 3238:
case 3302:
case 3823:
case 3700:
case 845:
case 1671:
case 341:
case 2606:
case 3313:
case 1018:
case 1946:
case 1709:
case 2373:
case 1975:
case 1189:
case 942:
case 3184:
case 3561:
case 296:
case 1465:
case 1067:
case 2403:
case 478:
case 4030:
case 230:
case 410:
case 2116:
case 1898:
case 2412:
case 950:
case 531:
case 4095:
case 3211:
case 3962:
case 113:
case 1000:
case 3697:
case 3459:
case 1196:
case 2169:
case 1492:
case 1677:
case 198:
case 2867:
case 2328:
case 3420:
case 3518:
case 970:
case 918:
case 1043:
case 3995:
case 574:
case 1509:
case 725:
case 2277:
case 3504:
case 764:
case 800:
case 3761:
case 2804:
case 3217:
case 3126:
case 4007:
case 3422:
case 551:
case 587:
case 2221:
case 2093:
case 930:
case 1037:
case 1452:
case 3499:
case 464:
case 3531:
case 1435:
case 644:
case 2802:
case 3737:
case 3361:
case 3115:
case 1621:
case 2442:
case 3748:
case 3873:
case 2175:
case 3932:
case 3955:
case 4064:
case 3227:
case 3848:
case 2907:
case 2304:
case 100:
case 2537:
case 2182:
case 1647:
case 2300:
case 2486:
case 2702:
case 3837:
case 3408:
case 1195:
case 1257:
case 2238:
case 2960:
case 1419:
case 898:
case 370:
case 2731:
case 2367:
case 2474:
case 72:
case 1436:
case 1297:
case 2184:
case 1132:
case 647:
case 540:
case 3373:
case 2313:
case 1915:
case 3606:
case 584:
case 2688:
case 2180:
case 3081:
case 3861:
case 3125:
case 2823:
case 703:
case 2697:
case 3956:
case 980:
case 2176:
case 1633:
case 2472:
case 1598:
case 3843:
case 2718:
case 630:
case 1288:
case 3116:
case 2543:
case 330:
case 944:
case 2331:
case 552:
case 2767:
case 2878:
case 2743:
case 762:
case 1668:
case 2567:
case 1617:
case 572:
case 1358:
case 1023:
case 2420:
case 3087:
case 3328:
case 406:
case 3485:
case 1164:
case 3578:
case 0:
case 3818:
case 2459:
case 1809:
case 3098:
case 2268:
case 2217:
case 1107:
case 2930:
case 1787:
case 3804:
case 3800:
case 1449:
case 2934:
case 2337:
case 1982:
case 2504:
case 3277:
case 3444:
case 149:
case 393:
case 2531:
case 2499:
case 2901:
case 350:
case 650:
case 557:
case 2343:
case 1945:
case 3093:
case 581:
case 3221:
case 1398:
case 2605:
case 813:
case 84:
case 280:
case 1641:
case 941:
case 145:
case 2502:
case 2955:
case 706:
case 1387:
case 3175:
case 3989:
case 1663:
case 3146:
case 2513:
case 3573:
case 1793:
case 462:
case 509:
case 3058:
case 2361:
case 1980:
case 2737:
case 3323:
case 2241:
case 705:
case 1363:
case 3936:
case 1687:
case 2475:
case 2142:
case 2077:
case 1871:
case 3623:
case 457:
case 212:
case 3888:
case 432:
case 3068:
case 2806:
case 917:
case 1135:
case 772:
case 2643:
case 1152:
case 29:
case 2253:
case 3897:
case 1190:
case 894:
case 1533:
case 2305:
case 3426:
case 1698:
case 6:
case 2391:
case 1547:
case 1763:
case 2648:
case 1538:
case 2144:
case 1129:
case 1658:
case 1317:
case 3124:
case 2557:
case 2979:
case 2293:
case 3857:
case 405:
case 2021:
case 1192:
case 1741:
case 1910:
case 1496:
case 3628:
case 143:
case 2505:
case 2952:
case 484:
case 2994:
case 1541:
case 2397:
case 3445:
case 2990:
case 99:
case 1202:
case 2416:
case 360:
case 3038:
case 440:
case 2757:
case 567:
case 2103:
case 452:
case 2551:
case 3484:
case 1821:
case 1942:
case 912:
case 437:
case 1311:
case 311:
case 3851:
case 611:
case 2027:
case 3306:
case 3480:
case 4019:
case 2613:
case 1563:
case 2929:
case 3170:
case 1733:
case 2383:
case 4036:
case 1568:
case 1985:
case 1179:
case 3174:
case 2110:
case 2667:
case 1200:
case 737:
case 1877:
case 1711:
case 477:
case 1940:
case 2604:
case 3891:
case 819:
case 1338:
case 699:
case 2788:
case 3482:
case 3706:
case 3949:
case 3186:
case 2108:
case 2591:
case 1944:
case 1347:
case 2439:
case 312:
case 2888:
case 564:
case 4050:
case 2623:
case 612:
case 2017:
case 525:
case 4092:
case 3142:
case 3791:
case 1571:
case 3588:
case 1321:
case 2936:
case 2122:
case 843:
case 3597:
case 2:
case 214:
case 3287:
case 69:
case 3253:
case 960:
case 2199:
case 1833:
case 3144:
case 3637:
case 4094:
case 558:
case 3751:
case 4035:
case 1005:
case 999:
case 1838:
case 4090:
case 2041:
case 3258:
case 3140:
case 3469:
case 1377:
case 787:
case 3293:
case 3979:
case 2120:
case 2124:
case 1460:
case 1051:
case 474:
case 2805:
case 3757:
case 1922:
case 2038:
case 1841:
case 3631:
case 3990:
case 454:
case 194:
case 3397:
case 3994:
case 2172:
case 2966:
case 70:
case 3952:
case 1273:
case 1521:
case 3425:
case 846:
case 3613:
case 2480:
case 3388:
case 482:
case 2851:
case 431:
case 3602:
case 317:
case 1057:
case 617:
case 1083:
case 1863:
case 2484:
case 1432:
case 4079:
case 2673:
case 1136:
case 3551:
case 578:
case 2011:
case 3667:
case 2174:
case 723:
case 348:
case 3618:
case 3954:
case 1920:
case 3383:
case 1924:
case 2209:
case 1577:
case 731:
case 3929:
case 1817:
case 3439:
case 1771:
case 299:
case 1097:
case 3600:
case 2949:
case 2706:
case 2482:
case 1434:
case 3788:
case 2033:
case 1430:
case 1609:
case 538:
case 1278:
case 3604:
case 208:
case 2355:
case 167:
case 1987:
case 1384:
case 2332:
case 2665:
case 3389:
case 1846:
case 4078:
case 2471:
case 2795:
case 3923:
case 1782:
case 2734:
case 1102:
case 543:
case 592:
case 227:
case 2301:
case 3082:
case 3862:
case 26:
case 2943:
case 1376:
case 983:
case 621:
case 864:
case 321:
case 1612:
case 1131:
case 3789:
case 3109:
case 2214:
case 2755:
case 2330:
case 3438:
case 1780:
case 2937:
case 103:
case 2507:
case 1100:
case 1993:
case 1279:
case 3045:
case 1608:
case 2395:
case 3076:
case 3596:
case 1776:
case 1745:
case 2025:
case 2181:
case 3860:
case 1958:
case 2427:
case 858:
case 3864:
case 3084:
case 1167:
case 1610:
case 2679:
case 4073:
case 2760:
case 2362:
case 3356:
case 878:
case 2242:
case 1143:
case 749:
case 1816:
case 3441:
case 222:
case 597:
case 1576:
case 390:
case 546:
case 353:
case 2764:
case 3463:
case 1294:
case 665:
case 4028:
case 2187:
case 336:
case 2153:
case 1642:
case 3855:
case 636:
case 1096:
case 365:
case 3589:
case 908:
case 1315:
case 3222:
case 1825:
case 2532:
case 1290:
case 3015:
case 2650:
case 3978:
case 2360:
case 2762:
case 4023:
case 2629:
case 838:
case 2240:
case 106:
case 2692:
case 2967:
case 745:
case 2364:
case 2046:
case 2477:
case 3396:
case 2075:
case 676:
case 2595:
case 3830:
case 3026:
case 376:
case 1640:
case 1582:
case 2534:
case 2900:
case 1292:
case 3834:
case 1056:
case 2193:
case 669:
case 3220:
case 3212:
case 1325:
case 2923:
case 965:
case 3961:
case 936:
case 1815:
case 1173:
case 608:
case 2636:
case 2411:
case 3665:
case 3332:
case 2272:
case 386:
case 2556:
case 178:
case 1030:
case 1497:
case 1095:
case 3943:
case 953:
case 520:
case 627:
case 36:
case 2862:
case 1034:
case 3856:
case 2082:
case 44:
case 1672:
case 233:
case 2076:
case 1339:
case 2045:
case 976:
case 3507:
case 3210:
case 1725:
case 3334:
case 3937:
case 74:
case 3330:
case 2270:
case 2109:
case 3948:
case 2789:
case 3016:
case 1716:
case 3208:
case 1055:
case 138:
case 2928:
case 2084:
case 1032:
case 3427:
case 2860:
case 3181:
case 4002:
case 888:
case 1178:
case 2619:
case 1007:
case 3690:
case 515:
case 622:
case 3501:
case 290:
case 2796:
case 1622:
case 3198:
case 322:
case 2441:
case 1769:
case 1699:
case 1876:
case 921:
case 125:
case 2666:
case 1845:
case 4037:
case 383:
case 2356:
case 3362:
case 3694:
case 164:
case 3902:
case 1880:
case 1060:
case 1123:
case 2589:
case 265:
case 956:
case 3069:
case 2299:
case 1346:
case 1266:
case 2855:
case 3153:
case 416:
case 3187:
case 224:
case 2463:
case 3421:
case 1525:
case 2396:
case 1249:
case 3075:
case 3654:
case 1620:
case 3477:
case 498:
case 3692:
case 1659:
case 3244:
case 4061:
case 3240:
case 3629:
case 3762:
case 2468:
case 2756:
case 158:
case 3360:
case 2417:
case 2978:
case 1624:
case 3650:
case 2220:
case 4043:
case 2649:
case 3285:
case 1882:
case 1062:
case 3900:
case 269:
case 3530:
case 3534:
case 276:
case 3904:
case 2830:
case 304:
case 1094:
case 2493:
case 2269:
case 959:
case 1052:
case 1296:
case 1808:
case 3022:
case 1448:
case 1810:
case 3392:
case 3790:
case 3664:
case 1669:
case 715:
case 3957:
case 2879:
case 3983:
case 2458:
case 3819:
case 3752:
case 1927:
case 1324:
case 3168:
case 4051:
case 3579:
case 1799:
case 3660:
case 3794:
case 3117:
case 791:
case 2749:
case 2906:
case 1050:
case 837:
case 1092:
case 187:
case 151:
case 3059:
case 1675:
case 2085:
case 3163:
case 2121:
case 235:
case 3754:
case 35:
case 963:
case 3215:
case 1322:
case 2040:
case 4091:
case 1812:
case 2498:
case 3141:
case 719:
case 3729:
case 3352:
case 2366:
case 2275:
case 1724:
case 3750:
case 840:
case 28:
case 2246:
case 1399:
case 3529:
case 3282:
case 207:
case 1374:
case 168:
case 1418:
case 1467:
case 1524:
case 2127:
case 3554:
case 2481:
case 2850:
case 3147:
case 171:
case 3634:
case 228:
case 389:
case 689:
case 10:
case 872:
case 3138:
case 2736:
case 2003:
case 939:
case 1840:
case 3409:
case 2012:
case 3991:
case 1431:
case 3779:
case 1599:
case 3552:
case 1616:
case 3905:
case 2566:
case 2890:
case 154:
case 809:
case 2225:
case 1770:
case 3284:
case 2894:
case 33:
case 1522:
case 2719:
case 3866:
case 3086:
case 1786:
case 513:
case 255:
case 1402:
case 131:
case 2171:
case 2010:
case 881:
case 685:
case 3632:
case 3111:
case 3276:
case 832:
case 4057:
case 2336:
case 1079:
case 3245:
case 1742:
case 1191:
case 1340:
case 1260:
case 1508:
case 375:
case 1938:
case 2022:
case 3349:
case 1066:
case 2099:
case 3493:
case 1264:
case 204:
case 1947:
case 339:
case 868:
case 549:
case 2794:
case 2117:
case 302:
case 2735:
case 2168:
case 2350:
case 3458:
case 3766:
case 3696:
case 2354:
case 105:
case 2664:
case 3177:
case 1514:
case 2790:
case 2392:
case 97:
case 335:
case 3121:
case 2163:
case 446:
case 666:
case 2059:
case 366:
case 1740:
case 635:
case 1262:
case 831:
case 985:
case 2024:
case 2988:
case 1423:
case 3906:
case 3749:
case 132:
case 1503:
case 3246:
case 38:
case 1049:
case 3366:
case 3275:
case 2352:
case 3044:
case 2729:
case 1872:
case 3656:
case 2662:
case 68:
case 2390:
case 2141:
case 1626:
case 2792:
case 3040:
case 1105:
case 25:
case 545:
case 201:
case 1917:
case 1314:
case 3829:
case 2592:
case 1478:
case 792:
case 2554:
case 500:
case 3239:
case 1183:
case 2379:
case 1703:
case 1820:
case 3854:
case 1036:
case 1859:
case 1712:
case 1310:
case 307:
case 2282:
case 1234:
case 874:
case 3892:
case 177:
case 359:
case 1544:
case 2630:
case 3012:
case 3736:
case 2138:
case 3549:
case 904:
case 2695:
case 743:
case 1682:
case 2634:
case 2147:
case 1540:
case 443:
case 2086:
case 1645:
case 663:
case 2866:
case 1676:
case 23:
case 41:
case 3894:
case 1232:
case 1197:
case 1255:
case 95:
case 1312:
case 3225:
case 826:
case 2594:
case 2280:
case 834:
case 3566:
case 1303:
case 1822:
case 2245:
case 152:
case 3336:
case 2276:
case 2365:
case 2111:
case 1201:
case 2655:
case 3010:
case 2074:
case 655:
case 3014:
case 2070:
case 851:
case 887:
case 1680:
case 3216:
case 1188:
case 2951:
case 1708:
case 2521:
case 392:
case 1306:
case 111:
case 2371:
case 3942:
case 3489:
case 3738:
case 2083:
case 1484:
case 521:
case 3821:
case 2136:
case 2455:
case 3213:
case 89:
case 2922:
case 759:
case 160:
case 2841:
case 728:
case 463:
case 1445:
case 294:
case 61:
case 1047:
case 1476:
case 31:
case 3333:
case 2999:
case 343:
case 4008:
case 199:
case 2495:
case 763:
case 2097:
case 1186:
case 3218:
case 1033:
case 1949:
case 1706:
case 3338:
case 2278:
case 2609:
case 4003:
case 3711:
case 459:
case 2959:
case 407:
case 1011:
case 3200:
case 1174:
case 3517:
case 3179:
case 2920:
case 2924:
case 2119:
case 755:
case 1678:
case 3204:
case 2817:
case 3903:
case 775:
case 3533:
case 4040:
case 2091:
case 565:
case 3190:
case 2777:
case 3717:
case 3194:
case 114:
case 2972:
case 739:
case 4044:
case 3152:
case 2166:
case 2833:
case 48:
case 3456:
case 1623:
case 1017:
case 817:
case 2811:
case 2571:
case 466:
case 3653:
case 646:
case 697:
case 590:
case 1506:
case 346:
case 4085:
case 1936:
case 435:
case 1628:
case 3237:
case 3192:
case 2377:
case 3910:
case 1063:
case 2464:
case 1857:
case 2527:
case 1120:
case 848:
case 1124:
case 569:
case 3368:
case 3827:
case 1919:
case 3914:
case 2970:
case 3129:
case 779:
case 219:
case 2228:
case 2847:
case 3908:
case 3693:
case 78:
case 2149:
case 2838:
case 3763:
case 475:
case 2721:
case 1041:
case 3547:
case 1551:
case 3136:
case 2821:
case 3057:
case 3863:
case 3083:
case 2311:
case 2489:
case 4070:
case 2231:
case 701:
case 56:
case 2747:
case 527:
case 620:
case 1027:
case 1388:
case 1425:
case 1613:
case 694:
case 3273:
case 3999:
case 3401:
case 43:
case 1994:
case 394:
case 789:
case 1990:
case 814:
case 1757:
case 1783:
case 3922:
case 1103:
case 586:
case 508:
case 2711:
case 1604:
case 3609:
case 1108:
case 3097:
case 4072:
case 1591:
case 2347:
case 2944:
case 3495:
case 1929:
case 1071:
case 1797:
case 1114:
case 2681:
case 2006:
case 47:
case 3924:
case 3327:
case 3920:
case 1357:
case 785:
case 1383:
case 2179:
case 1992:
case 1110:
case 1667:
case 2135:
case 3833:
case 1643:
case 1287:
case 1253:
case 704:
case 3777:
case 91:
case 3223:
case 943:
case 1305:
case 2903:
case 315:
case 3321:
case 1965:
case 4020:
case 1588:
case 1475:
case 3571:
case 3811:
case 1077:
case 811:
case 2871:
case 2511:
case 1661:
case 691:
case 4024:
case 583:
case 895:
case 1806:
case 1351:
case 2658:
case 2129:
case 2317:
case 3460:
case 2368:
case 3051:
case 2248:
case 1583:
case 1705:
case 3527:
case 1185:
case 1293:
case 2910:
case 3377:
case 3974:
case 2741:
case 2192:
case 2496:
case 1391:
case 2547:
case 1140:
case 1258:
case 3838:
case 3005:
case 75:
case 3149:
case 2538:
case 3986:
case 2908:
case 3228:
case 319:
case 1144:
case 1637:
case 2787:
case 1691:
case 1930:
case 1934:
case 2982:
case 783:
case 2449:
case 900:
case 2393:
case 1995:
case 249:
case 3939:
case 3429:
case 1518:
case 1567:
case 2023:
case 3450:
case 2291:
case 2358:
case 3061:
case 3881:
case 3454:
case 2581:
case 4046:
case 698:
case 2798:
case 3492:
case 3196:
case 1955:
case 55:
case 316:
case 2353:
case 1748:
case 616:
case 4069:
case 2793:
case 2205:
case 1115:
case 1737:
case 896:
case 3925:
case 1499:
case 3435:
case 3156:
case 1531:
case 3037:
case 2466:
case 2758:
case 144:
case 2945:
case 2251:
case 2398:
case 3048:
case 1422:
case 3627:
case 1238:
case 1470:
case 3013:
case 589:
case 1247:
case 3479:
case 786:
case 1731:
case 708:
case 1318:
case 2073:
case 1474:
case 1683:
case 4016:
case 2638:
case 2593:
case 1907:
case 1304:
case 3031:
case 1537:
case 2130:
case 200:
case 2647:
case 1182:
case 2134:
case 727:
case 1300:
case 1713:
case 501:
case 76:
case 2195:
case 1962:
case 3000:
case 1211:
case 427:
case 34:
case 46:
case 2633:
case 2598:
case 3206:
case 3898:
case 893:
case 585:
case 1767:
case 850:
case 1331:
case 486:
case 2297:
case 408:
case 2155:
case 3853:
case 3465:
case 1561:
case 1184:
case 2611:
case 842:
case 3975:
case 1233:
case 3709:
case 1313:
case 2078:
case 141:
case 2587:
case 1302:
case 1700:
case 2939:
case 2043:
case 1444:
case 2509:
case 1277:
case 469:
case 1800:
case 649:
case 3753:
case 790:
case 3787:
case 4026:
case 1098:
case 2196:
case 1818:
case 2492:
case 3798:
case 1578:
case 3164:
case 575:
case 724:
case 736:
case 2454:
case 1053:
case 3358:
case 3023:
case 3668:
case 2429:
case 4015:
case 1058:
case 1323:
case 1802:
case 1813:
case 841:
case 645:
case 1175:
case 1442:
case 3353:
case 3387:
case 3984:
case 345:
case 3641:
case 776:
case 1831:
case 490:
case 1728:
case 566:
case 94:
case 3398:
case 1093:
case 2494:
case 579:
case 2037:
case 2156:
case 3162:
case 1996:
case 2969:
case 3073:
case 118:
case 2479:
case 4084:
case 756:
case 1528:
case 4080:
case 3381:
case 1378:
case 2013:
case 4076:
case 3283:
case 3257:
case 4045:
case 733:
case 1408:
case 1837:
case 3647:
case 300:
case 721:
case 2031:
case 2309:
case 1773:
case 1227:
case 507:
case 3638:
case 3926:
case 1271:
case 421:
case 130:
case 3288:
case 2206:
case 1116:
case 1412:
case 1778:
case 3598:
case 1843:
case 4082:
case 3101:
case 2000:
case 3781:
case 1956:
case 213:
case 1081:
case 1125:
case 3553:
case 456:
case 2671:
case 3587:
case 1606:
case 3915:
case 3078:
case 916:
case 2946:
case 1373:
case 2709:
case 147:
case 2975:
case 3611:
case 2465:
case 196:
case 1523:
case 3155:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749823201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,];
var gg_b = "1749823201/";

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
