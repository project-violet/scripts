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
case 3972:
case 1344:
case 1127:
case 3724:
case 3353:
case 1278:
case 748:
case 569:
case 3457:
case 1464:
case 713:
case 985:
case 16:
case 1954:
case 3967:
case 31:
case 2539:
case 1496:
case 741:
case 2853:
case 3655:
case 3403:
case 1029:
case 3169:
case 2222:
case 2506:
case 3217:
case 3575:
case 3246:
case 3729:
case 3065:
case 1811:
case 3562:
case 1518:
case 1349:
case 768:
case 1848:
case 3360:
case 2412:
case 2823:
case 270:
case 2376:
case 1541:
case 1125:
case 214:
case 3285:
case 3215:
case 1237:
case 1469:
case 90:
case 1959:
case 826:
case 3577:
case 808:
case 3965:
case 3440:
case 3455:
case 2805:
case 1881:
case 2091:
case 3164:
case 3196:
case 1664:
case 3323:
case 401:
case 3829:
case 2471:
case 498:
case 321:
case 1108:
case 1748:
case 2354:
case 396:
case 1192:
case 3692:
case 280:
case 2723:
case 2297:
case 426:
case 2609:
case 2230:
case 306:
case 1513:
case 1594:
case 2705:
case 507:
case 362:
case 883:
case 491:
case 2760:
case 112:
case 2521:
case 473:
case 2828:
case 408:
case 330:
case 1031:
case 1867:
case 365:
case 3492:
case 4061:
case 115:
case 2049:
case 556:
case 3948:
case 3824:
case 3731:
case 3081:
case 357:
case 2186:
case 1076:
case 1242:
case 3911:
case 1599:
case 2147:
case 2707:
case 1865:
case 2753:
case 1800:
case 3011:
case 3358:
case 2163:
case 342:
case 2949:
case 3:
case 3048:
case 3533:
case 2983:
case 125:
case 3070:
case 901:
case 1661:
case 1884:
case 2013:
case 2339:
case 3751:
case 3375:
case 141:
case 2838:
case 472:
case 1798:
case 2306:
case 76:
case 363:
case 1702:
case 80:
case 1921:
case 926:
case 2216:
case 3839:
case 3507:
case 2083:
case 1814:
case 2733:
case 1893:
case 1173:
case 3970:
case 2195:
case 973:
case 786:
case 908:
case 2456:
case 2913:
case 3442:
case 343:
case 1889:
case 3377:
case 311:
case 1292:
case 2480:
case 1388:
case 3362:
case 1549:
case 2197:
case 416:
case 3473:
case 2576:
case 2245:
case 318:
case 1819:
case 3098:
case 3721:
case 3560:
case 1394:
case 2152:
case 1039:
case 624:
case 3478:
case 2529:
case 1487:
case 2601:
case 3014:
case 2232:
case 224:
case 2321:
case 1225:
case 564:
case 485:
case 3115:
case 1615:
case 1906:
case 3435:
case 816:
case 875:
case 1870:
case 1190:
case 2554:
case 2479:
case 1257:
case 3296:
case 2524:
case 619:
case 3558:
case 3187:
case 3333:
case 49:
case 872:
case 287:
case 3989:
case 723:
case 40:
case 2018:
case 1240:
case 3089:
case 3739:
case 500:
case 2775:
case 1617:
case 3269:
case 2559:
case 337:
case 1646:
case 2041:
case 715:
case 3437:
case 776:
case 2463:
case 2650:
case 2416:
case 3843:
case 2645:
case 162:
case 946:
case 3031:
case 2136:
case 2256:
case 2570:
case 3566:
case 106:
case 2749:
case 750:
case 2343:
case 3748:
case 934:
case 1692:
case 2367:
case 3872:
case 3192:
case 1829:
case 3711:
case 2053:
case 2486:
case 905:
case 2007:
case 3391:
case 3273:
case 2023:
case 854:
case 4073:
case 1:
case 1533:
case 2104:
case 881:
case 3976:
case 3599:
case 1981:
case 2905:
case 3800:
case 2663:
case 471:
case 478:
case 4042:
case 2891:
case 2686:
case 1081:
case 157:
case 72:
case 2598:
case 2005:
case 2060:
case 3242:
case 323:
case 1492:
case 98:
case 1824:
case 1261:
case 2300:
case 454:
case 1217:
case 959:
case 1072:
case 1759:
case 3235:
case 4035:
case 1575:
case 636:
case 3954:
case 11:
case 2844:
case 1457:
case 3464:
case 871:
case 3029:
case 3155:
case 3140:
case 2279:
case 893:
case 1640:
case 1943:
case 1655:
case 1403:
case 3054:
case 1067:
case 2791:
case 488:
case 4078:
case 803:
case 1043:
case 587:
case 690:
case 644:
case 2432:
case 1307:
case 3344:
case 1972:
case 386:
case 1353:
case 2112:
case 1627:
case 1287:
case 3127:
case 3588:
case 1900:
case 1455:
case 2519:
case 3103:
case 3664:
case 1876:
case 1657:
case 1323:
case 1754:
case 3881:
case 3157:
case 743:
case 3237:
case 2274:
case 2311:
case 1215:
case 2058:
case 3469:
case 4037:
case 3924:
case 1305:
case 1427:
case 3541:
case 3772:
case 3125:
case 2381:
case 3059:
case 1285:
case 1625:
case 2632:
case 664:
case 3811:
case 1065:
case 2589:
case 1562:
case 3518:
case 3349:
case 459:
case 954:
case 802:
case 3719:
case 4003:
case 3383:
case 2038:
case 1296:
case 2543:
case 3257:
case 2813:
case 1734:
case 3906:
case 745:
case 2894:
case 2174:
case 3137:
case 2866:
case 1115:
case 2975:
case 3190:
case 3417:
case 1993:
case 1690:
case 1914:
case 1984:
case 2572:
case 150:
case 2101:
case 706:
case 570:
case 2075:
case 1093:
case 514:
case 2883:
case 649:
case 249:
case 47:
case 730:
case 2718:
case 3039:
case 3313:
case 3789:
case 2938:
case 762:
case 88:
case 1478:
case 3793:
case 1490:
case 1117:
case 846:
case 2398:
case 2622:
case 2282:
case 3135:
case 1269:
case 1437:
case 2977:
case 1706:
case 3934:
case 765:
case 2565:
case 12:
case 4055:
case 1919:
case 4040:
case 2899:
case 2062:
case 3240:
case 742:
case 1678:
case 1019:
case 2962:
case 269:
case 529:
case 3485:
case 7:
case 2077:
case 1851:
case 3784:
case 1673:
case 2430:
case 3814:
case 1338:
case 2695:
case 3173:
case 1806:
case 495:
case 1553:
case 2204:
case 348:
case 1507:
case 1839:
case 2384:
case 2393:
case 2126:
case 2314:
case 2271:
case 939:
case 163:
case 3702:
case 3142:
case 313:
case 1161:
case 3884:
case 1751:
case 3661:
case 118:
case 368:
case 1002:
case 1721:
case 859:
case 1560:
case 2888:
case 402:
case 993:
case 2697:
case 2766:
case 3318:
case 1834:
case 2209:
case 971:
case 607:
case 4092:
case 3951:
case 2033:
case 2319:
case 2783:
case 4008:
case 3388:
case 3292:
case 580:
case 3889:
case 361:
case 111:
case 419:
case 1128:
case 3288:
case 914:
case 3628:
case 970:
case 2167:
case 588:
case 4088:
case 877:
case 682:
case 2574:
case 2459:
case 3809:
case 1277:
case 3068:
case 1012:
case 1732:
case 2725:
case 2172:
case 360:
case 2069:
case 2892:
case 2336:
case 1585:
case 332:
case 2808:
case 554:
case 1912:
case 581:
case 20:
case 1262:
case 3218:
case 2289:
case 1517:
case 2293:
case 3782:
case 304:
case 3032:
case 1275:
case 2371:
case 2740:
case 2755:
case 1816:
case 2964:
case 2454:
case 3804:
case 2996:
case 685:
case 3871:
case 2624:
case 1768:
case 2284:
case 2727:
case 2304:
case 3932:
case 394:
case 340:
case 1587:
case 539:
case 3882:
case 2510:
case 3460:
case 1763:
case 2312:
case 1153:
case 1716:
case 2855:
case 3653:
case 3405:
case 3327:
case 2840:
case 3945:
case 1644:
case 1936:
case 779:
case 1747:
case 3607:
case 616:
case 127:
case 3045:
case 2382:
case 3542:
case 1369:
case 3340:
case 1868:
case 1561:
case 275:
case 3423:
case 216:
case 1009:
case 2181:
case 2676:
case 2857:
case 3407:
case 1904:
case 3086:
case 1160:
case 3963:
case 578:
case 503:
case 738:
case 1649:
case 2270:
case 4066:
case 3266:
case 3294:
case 720:
case 3213:
case 1396:
case 2792:
case 1364:
case 184:
case 3920:
case 731:
case 2708:
case 571:
case 1971:
case 2431:
case 1004:
case 3016:
case 151:
case 593:
case 2111:
case 352:
case 2281:
case 534:
case 1260:
case 1205:
case 2536:
case 1499:
case 1080:
case 3433:
case 3995:
case 2170:
case 1910:
case 3756:
case 3113:
case 710:
case 2061:
case 3194:
case 3874:
case 2837:
case 1980:
case 3508:
case 546:
case 3801:
case 2451:
case 2248:
case 1926:
case 2374:
case 1852:
case 2211:
case 347:
case 1315:
case 1466:
case 601:
case 1494:
case 977:
case 1413:
case 2835:
case 3930:
case 1795:
case 870:
case 2773:
case 1133:
case 1253:
case 2504:
case 4044:
case 1387:
case 3879:
case 201:
case 58:
case 367:
case 2102:
case 1346:
case 273:
case 189:
case 3726:
case 1317:
case 291:
case 3335:
case 3097:
case 1056:
case 3030:
case 1483:
case 226:
case 73:
case 2606:
case 2434:
case 3477:
case 414:
case 987:
case 1569:
case 470:
case 2582:
case 2114:
case 2193:
case 880:
case 2873:
case 1895:
case 2085:
case 15:
case 3779:
case 2639:
case 2380:
case 3540:
case 3952:
case 2842:
case 4091:
case 3462:
case 3638:
case 3291:
case 1138:
case 3373:
case 1258:
case 3527:
case 683:
case 2985:
case 3188:
case 924:
case 1228:
case 429:
case 3503:
case 2267:
case 751:
case 1596:
case 2439:
case 309:
case 1979:
case 3557:
case 1564:
case 2790:
case 1830:
case 131:
case 3774:
case 2634:
case 3856:
case 2946:
case 2017:
case 138:
case 2046:
case 3438:
case 758:
case 1618:
case 2189:
case 399:
case 1752:
case 3868:
case 2908:
case 1340:
case 2448:
case 3009:
case 733:
case 526:
case 602:
case 3561:
case 3720:
case 1045:
case 202:
case 573:
case 508:
case 1542:
case 153:
case 1771:
case 407:
case 3786:
case 3036:
case 1405:
case 1653:
case 292:
case 1945:
case 1460:
case 3763:
case 28:
case 501:
case 1607:
case 3107:
case 497:
case 68:
case 4033:
case 3449:
case 2092:
case 1882:
case 709:
case 3004:
case 3971:
case 351:
case 646:
case 1016:
case 2611:
case 695:
case 3364:
case 3832:
case 384:
case 1283:
case 3396:
case 2648:
case 1303:
case 1149:
case 1020:
case 2597:
case 1709:
case 456:
case 3649:
case 2530:
case 634:
case 1266:
case 2896:
case 3444:
case 1736:
case 799:
case 1947:
case 2864:
case 1407:
case 1963:
case 3750:
case 1453:
case 605:
case 4062:
case 2040:
case 2129:
case 2055:
case 752:
case 374:
case 3732:
case 3082:
case 160:
case 3585:
case 132:
case 1241:
case 1458:
case 4077:
case 1809:
case 3982:
case 1068:
case 3012:
case 3277:
case 2234:
case 1590:
case 1628:
case 1392:
case 2764:
case 747:
case 469:
case 1288:
case 3845:
case 1308:
case 2643:
case 2955:
case 3158:
case 3768:
case 194:
case 1932:
case 3820:
case 936:
case 4038:
case 1871:
case 2057:
case 900:
case 2665:
case 3863:
case 2443:
case 2600:
case 2239:
case 1804:
case 1428:
case 2957:
case 135:
case 27:
case 2320:
case 2522:
case 67:
case 2206:
case 2025:
case 1032:
case 2769:
case 3546:
case 755:
case 2386:
case 2787:
case 3074:
case 2224:
case 2684:
case 3901:
case 1527:
case 2090:
case 1880:
case 2568:
case 3418:
case 1462:
case 3138:
case 1373:
case 1638:
case 1291:
case 753:
case 35:
case 2139:
case 3361:
case 1779:
case 1555:
case 3488:
case 1540:
case 1342:
case 2937:
case 969:
case 3569:
case 464:
case 1810:
case 3001:
case 2746:
case 3895:
case 3175:
case 3722:
case 281:
case 199:
case 2229:
case 3752:
case 1118:
case 1662:
case 436:
case 320:
case 2035:
case 681:
case 400:
case 338:
case 254:
case 1525:
case 688:
case 3830:
case 1922:
case 1856:
case 1774:
case 444:
case 2254:
case 2619:
case 59:
case 3228:
case 109:
case 3979:
case 4028:
case 1557:
case 288:
case 3596:
case 582:
case 3926:
case 1390:
case 1337:
case 3683:
case 2885:
case 3980:
case 1095:
case 2073:
case 1183:
case 4023:
case 1592:
case 671:
case 3080:
case 1433:
case 1995:
case 603:
case 1249:
case 678:
case 890:
case 732:
case 2973:
case 1113:
case 2352:
case 3666:
case 1874:
case 760:
case 997:
case 3613:
case 2815:
case 3910:
case 4060:
case 2545:
case 2550:
case 2121:
case 572:
case 3205:
case 2042:
case 3056:
case 704:
case 1097:
case 2151:
case 155:
case 2887:
case 516:
case 575:
case 1030:
case 3483:
case 1780:
case 317:
case 2586:
case 3346:
case 2231:
case 2698:
case 1726:
case 3387:
case 1199:
case 1879:
case 2547:
case 3253:
case 3699:
case 1244:
case 4053:
case 3207:
case 740:
case 2846:
case 3494:
case 1997:
case 239:
case 2470:
case 2817:
case 1378:
case 3133:
case 1633:
case 1930:
case 3497:
case 484:
case 917:
case 1610:
case 1456:
case 5:
case 3695:
case 2893:
case 1195:
case 874:
case 1216:
case 3799:
case 2544:
case 1263:
case 2921:
case 1247:
case 1531:
case 1306:
case 2142:
case 458:
case 4071:
case 2702:
case 3393:
case 2798:
case 2661:
case 1094:
case 356:
case 1013:
case 1680:
case 1983:
case 613:
case 225:
case 565:
case 3180:
case 1220:
case 2819:
case 3236:
case 1576:
case 268:
case 1250:
case 3581:
case 4036:
case 2341:
case 1245:
case 1130:
case 3630:
case 668:
case 506:
case 3495:
case 3794:
case 2549:
case 1656:
case 1877:
case 1410:
case 1197:
case 3713:
case 3389:
case 43:
case 3156:
case 714:
case 3766:
case 3548:
case 596:
case 521:
case 261:
case 2889:
case 1334:
case 3818:
case 1099:
case 2257:
case 2719:
case 3543:
case 3567:
case 2203:
case 827:
case 2939:
case 938:
case 83:
case 3975:
case 2417:
case 1674:
case 2615:
case 780:
case 2137:
case 2446:
case 2685:
case 124:
case 3075:
case 2487:
case 3101:
case 1601:
case 3370:
case 931:
case 3938:
case 1762:
case 2039:
case 1152:
case 349:
case 3652:
case 3977:
case 410:
case 2646:
case 1041:
case 1474:
case 474:
case 4082:
case 2135:
case 884:
case 1122:
case 1775:
case 2617:
case 1833:
case 851:
case 1018:
case 3179:
case 3062:
case 2255:
case 3500:
case 3565:
case 3452:
case 369:
case 3962:
case 2591:
case 1918:
case 858:
case 2034:
case 3077:
case 2399:
case 95:
case 2687:
case 3212:
case 1524:
case 2485:
case 420:
case 3593:
case 1222:
case 1331:
case 1506:
case 1682:
case 300:
case 2669:
case 2155:
case 3279:
case 52:
case 2464:
case 4079:
case 3928:
case 26:
case 336:
case 686:
case 2929:
case 3028:
case 2278:
case 3791:
case 431:
case 3668:
case 1612:
case 1168:
case 3112:
case 2344:
case 286:
case 3584:
case 3432:
case 390:
case 910:
case 2881:
case 1091:
case 2157:
case 2664:
case 974:
case 479:
case 2103:
case 1860:
case 2588:
case 2743:
case 3348:
case 2469:
case 1534:
case 64:
case 3058:
case 2024:
case 1823:
case 364:
case 1376:
case 170:
case 2772:
case 3381:
case 2125:
case 114:
case 2059:
case 1132:
case 2848:
case 3201:
case 3958:
case 1412:
case 2924:
case 1991:
case 2518:
case 2349:
case 45:
case 1252:
case 2811:
case 489:
case 3136:
case 3447:
case 1944:
case 2867:
case 1404:
case 2031:
case 1636:
case 3953:
case 518:
case 3650:
case 3645:
case 3463:
case 1760:
case 212:
case 879:
case 2513:
case 1230:
case 2594:
case 612:
case 3749:
case 951:
case 1297:
case 724:
case 3420:
case 3007:
case 1471:
case 2931:
case 2711:
case 3053:
case 838:
case 3023:
case 1295:
case 3663:
case 3960:
case 2800:
case 2599:
case 3744:
case 1604:
case 787:
case 3104:
case 3647:
case 93:
case 2976:
case 2242:
case 223:
case 676:
case 563:
case 3891:
case 3686:
case 3226:
case 1186:
case 2076:
case 4080:
case 3365:
case 831:
case 3923:
case 276:
case 1120:
case 1551:
case 3280:
case 215:
case 623:
case 1938:
case 1370:
case 3529:
case 2478:
case 435:
case 3762:
case 1718:
case 2185:
case 1075:
case 2093:
case 1883:
case 3601:
case 1741:
case 1572:
case 250:
case 4032:
case 2993:
case 2690:
case 2435:
case 2914:
case 1813:
case 1894:
case 440:
case 1866:
case 999:
case 3674:
case 494:
case 2296:
case 1543:
case 1788:
case 2264:
case 54:
case 853:
case 3479:
case 2528:
case 1567:
case 3554:
case 1212:
case 3268:
case 2851:
case 2187:
case 2558:
case 1962:
case 387:
case 319:
case 933:
case 2019:
case 3018:
case 2089:
case 3351:
case 1565:
case 56:
case 637:
case 3988:
case 3559:
case 1977:
case 2706:
case 3041:
case 2490:
case 2117:
case 3833:
case 1398:
case 1282:
case 3122:
case 3775:
case 3094:
case 2161:
case 3013:
case 156:
case 3339:
case 4020:
case 3680:
case 515:
case 576:
case 2642:
case 3531:
case 377:
case 3306:
case 4086:
case 3838:
case 3286:
case 2375:
case 3263:
case 2507:
case 2839:
case 3216:
case 1384:
case 2553:
case 4016:
case 967:
case 832:
case 790:
case 1497:
case 1110:
case 3966:
case 2970:
case 3875:
case 2673:
case 3083:
case 1430:
case 3733:
case 1695:
case 2338:
case 211:
case 197:
case 3862:
case 3099:
case 2442:
case 243:
case 2902:
case 1033:
case 1548:
case 1319:
case 1783:
case 643:
case 804:
case 611:
case 1209:
case 1933:
case 1495:
case 618:
case 2473:
case 840:
case 3130:
case 3410:
case 2560:
case 1888:
case 1236:
case 2505:
case 2098:
case 107:
case 1581:
case 3999:
case 218:
case 453:
case 512:
case 561:
case 3471:
case 696:
case 645:
case 380:
case 245:
case 1420:
case 1367:
case 296:
case 621:
case 2608:
case 1343:
case 833:
case 662:
case 1109:
case 206:
case 3609:
case 3230:
case 628:
case 630:
case 4030:
case 1256:
case 3297:
case 3944:
case 749:
case 1447:
case 2776:
case 3760:
case 3521:
case 1953:
case 522:
case 1416:
case 1650:
case 262:
case 657:
case 2824:
case 2261:
case 1365:
case 3858:
case 2408:
case 3120:
case 1280:
case 3049:
case 2492:
case 265:
case 1620:
case 525:
case 1923:
case 1598:
case 513:
case 1005:
case 1060:
case 1226:
case 3671:
case 2731:
case 257:
case 1905:
case 3753:
case 1616:
case 2011:
case 2358:
case 3163:
case 1445:
case 1663:
case 1960:
case 899:
case 548:
case 3324:
case 1647:
case 3707:
case 447:
case 3436:
case 3604:
case 2:
case 2533:
case 1210:
case 2859:
case 3295:
case 642:
case 3168:
case 1112:
case 3758:
case 2627:
case 2287:
case 1668:
case 3612:
case 2724:
case 2425:
case 935:
case 144:
case 1432:
case 2307:
case 190:
case 2972:
case 2538:
case 2067:
case 1791:
case 1028:
case 904:
case 1279:
case 2640:
case 2403:
case 847:
case 3853:
case 2967:
case 3539:
case 2457:
case 994:
case 499:
case 1514:
case 61:
case 3682:
case 2217:
case 100:
case 2169:
case 3222:
case 2759:
case 1182:
case 3991:
case 2000:
case 1381:
case 3132:
case 2625:
case 3823:
case 370:
case 1468:
case 2305:
case 1201:
case 1849:
case 2577:
case 855:
case 1311:
case 2215:
case 2657:
case 960:
case 2323:
case 797:
case 2164:
case 2440:
case 2900:
case 867:
case 2603:
case 2455:
case 3860:
case 1374:
case 2852:
case 79:
case 2315:
case 2926:
case 371:
case 782:
case 922:
case 2010:
case 1248:
case 968:
case 1961:
case 3073:
case 415:
case 2694:
case 1509:
case 476:
case 2910:
case 3352:
case 2797:
case 3973:
case 3670:
case 961:
case 2080:
case 886:
case 2730:
case 1890:
case 1170:
case 303:
case 1536:
case 70:
case 1301:
case 3545:
case 1281:
case 3121:
case 2026:
case 126:
case 617:
case 689:
case 1379:
case 3761:
case 3887:
case 2056:
case 84:
case 1198:
case 1878:
case 191:
case 2317:
case 3322:
case 3231:
case 1102:
case 2346:
case 1742:
case 217:
case 3563:
case 2207:
case 2253:
case 2699:
case 198:
case 3547:
case 1773:
case 3470:
case 2133:
case 941:
case 2466:
case 3846:
case 2494:
case 2413:
case 2956:
case 1512:
case 4024:
case 594:
case 3090:
case 679:
case 1015:
case 3684:
case 2901:
case 3787:
case 3037:
case 1184:
case 3224:
case 3395:
case 2138:
case 279:
case 183:
case 1842:
case 2418:
case 1310:
case 1380:
case 3139:
case 2361:
case 1326:
case 504:
case 3990:
case 3693:
case 1085:
case 65:
case 1434:
case 1915:
case 3746:
case 2974:
case 3937:
case 2569:
case 2618:
case 3689:
case 1356:
case 1189:
case 3229:
case 3397:
case 2079:
case 381:
case 3978:
case 1987:
case 354:
case 3484:
case 2641:
case 220:
case 1017:
case 1737:
case 1087:
case 2177:
case 1406:
case 1634:
case 815:
case 2830:
case 631:
case 2596:
case 1439:
case 4054:
case 2979:
case 388:
case 823:
case 2228:
case 3078:
case 3254:
case 3619:
case 2688:
case 1629:
case 610:
case 2262:
case 3129:
case 1289:
case 2491:
case 3552:
case 2585:
case 3345:
case 2912:
case 1424:
case 1725:
case 2082:
case 1501:
case 3027:
case 2012:
case 1574:
case 1969:
case 4034:
case 2515:
case 1459:
case 509:
case 1143:
case 813:
case 182:
case 3955:
case 2850:
case 3400:
case 1757:
case 19:
case 3347:
case 3925:
case 2587:
case 96:
case 3363:
case 2158:
case 1624:
case 3057:
case 359:
case 2886:
case 1096:
case 3003:
case 1429:
case 37:
case 2847:
case 4039:
case 3467:
case 1454:
case 773:
case 986:
case 708:
case 1165:
case 791:
case 3600:
case 3239:
case 2816:
case 2863:
case 2546:
case 1293:
case 3386:
case 1214:
case 3159:
case 3769:
case 533:
case 2561:
case 3992:
case 23:
case 2720:
case 366:
case 3908:
case 3448:
case 555:
case 422:
case 1631:
case 2369:
case 468:
case 1526:
case 227:
case 567:
case 302:
case 2644:
case 2107:
case 976:
case 915:
case 38:
case 461:
case 2716:
case 1855:
case 1840:
case 392:
case 2909:
case 1510:
case 3595:
case 684:
case 3611:
case 547:
case 448:
case 2004:
case 1148:
case 912:
case 3648:
case 2123:
case 651:
case 2396:
case 2364:
case 1825:
case 284:
case 2832:
case 425:
case 1270:
case 3597:
case 2750:
case 1803:
case 2745:
case 441:
case 2105:
case 334:
case 3332:
case 1181:
case 3864:
case 1857:
case 2071:
case 413:
case 2904:
case 3085:
case 1259:
case 1614:
case 3735:
case 896:
case 3326:
case 1717:
case 2675:
case 2342:
case 1937:
case 1106:
case 766:
case 3434:
case 3606:
case 3915:
case 1746:
case 4065:
case 821:
case 2555:
case 4000:
case 3380:
case 633:
case 3200:
case 2373:
case 792:
case 830:
case 3778:
case 2462:
case 2952:
case 3842:
case 383:
case 828:
case 1090:
case 806:
case 3512:
case 1568:
case 92:
case 1787:
case 1861:
case 3184:
case 1684:
case 209:
case 188:
case 2557:
case 3267:
case 857:
case 4043:
case 2188:
case 3119:
case 1078:
case 2856:
case 3634:
case 1715:
case 3946:
case 3737:
case 3087:
case 3917:
case 2475:
case 865:
case 1493:
case 1414:
case 609:
case 4072:
case 3046:
case 154:
case 2525:
case 574:
case 1035:
case 699:
case 299:
case 1229:
case 1397:
case 2118:
case 842:
case 2662:
case 1689:
case 3536:
case 4081:
case 178:
case 103:
case 1042:
case 558:
case 3621:
case 1276:
case 252:
case 1550:
case 1352:
case 3837:
case 2874:
case 652:
case 2194:
case 2166:
case 911:
case 3961:
case 3451:
case 3248:
case 1885:
case 4:
case 1073:
case 584:
case 3211:
case 2337:
case 1942:
case 193:
case 551:
case 1402:
case 2390:
case 81:
case 1498:
case 4011:
case 1817:
case 1470:
case 2633:
case 2930:
case 1846:
case 139:
case 2997:
case 3421:
case 1563:
case 398:
case 3504:
case 462:
case 1231:
case 2726:
case 428:
case 3742:
case 373:
case 308:
case 3571:
case 267:
case 53:
case 2030:
case 255:
case 1092:
case 2882:
case 850:
case 1595:
case 965:
case 3476:
case 443:
case 2704:
case 1481:
case 2950:
case 3855:
case 3840:
case 2299:
case 411:
case 2460:
case 253:
case 418:
case 3298:
case 3631:
case 2050:
case 1411:
case 2045:
case 102:
case 589:
case 166:
case 375:
case 2423:
case 316:
case 2812:
case 1908:
case 653:
case 1448:
case 2355:
case 1251:
case 3580:
case 2916:
case 3803:
case 2605:
case 2453:
case 372:
case 996:
case 1176:
case 2736:
case 1681:
case 2086:
case 2947:
case 2325:
case 2407:
case 3676:
case 2294:
case 1530:
case 2266:
case 105:
case 2020:
case 754:
case 1648:
case 3825:
case 930:
case 2920:
case 2063:
case 3111:
case 2986:
case 3431:
case 2047:
case 771:
case 1940:
case 4019:
case 1955:
case 1400:
case 1465:
case 2392:
case 3167:
case 1154:
case 3219:
case 1667:
case 793:
case 2590:
case 1027:
case 531:
case 3574:
case 3969:
case 2968:
case 1350:
case 1927:
case 3808:
case 437:
case 520:
case 3725:
case 3892:
case 3069:
case 3172:
case 260:
case 1040:
case 2218:
case 1129:
case 1055:
case 3629:
case 632:
case 1552:
case 30:
case 3309:
case 1025:
case 2782:
case 2032:
case 204:
case 450:
case 3371:
case 3214:
case 2535:
case 4093:
case 811:
case 3996:
case 3579:
case 2428:
case 235:
case 1957:
case 1320:
case 3100:
case 55:
case 1665:
case 3165:
case 3740:
case 604:
case 1239:
case 3064:
case 2871:
case 3429:
case 579:
case 818:
case 1003:
case 694:
case 294:
case 240:
case 1472:
case 91:
case 1316:
case 1124:
case 2658:
case 1363:
case 3624:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757304002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,];
var gg_b = "1757304002/";

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
