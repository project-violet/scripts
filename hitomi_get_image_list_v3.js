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
case 1849:
case 1799:
case 1693:
case 1283:
case 3614:
case 2509:
case 3617:
case 2734:
case 3708:
case 1776:
case 3227:
case 3748:
case 3952:
case 3060:
case 764:
case 1952:
case 2783:
case 3144:
case 1770:
case 755:
case 1751:
case 1212:
case 1440:
case 2481:
case 3937:
case 3383:
case 1169:
case 2493:
case 1208:
case 233:
case 1362:
case 429:
case 2641:
case 1006:
case 3840:
case 1744:
case 1934:
case 2559:
case 2204:
case 4079:
case 3116:
case 3897:
case 3272:
case 2292:
case 356:
case 486:
case 336:
case 1322:
case 2490:
case 411:
case 815:
case 2497:
case 231:
case 3822:
case 687:
case 2946:
case 2546:
case 976:
case 3805:
case 1675:
case 402:
case 1754:
case 1860:
case 1339:
case 2680:
case 2392:
case 2316:
case 3728:
case 847:
case 1503:
case 2334:
case 2736:
case 1557:
case 1824:
case 380:
case 437:
case 1623:
case 196:
case 445:
case 3697:
case 216:
case 1859:
case 3059:
case 1713:
case 1864:
case 1224:
case 494:
case 3586:
case 2256:
case 1089:
case 2667:
case 3267:
case 622:
case 1316:
case 3762:
case 1481:
case 861:
case 797:
case 2714:
case 3883:
case 1951:
case 1638:
case 2842:
case 1477:
case 1416:
case 2695:
case 562:
case 2458:
case 3825:
case 3846:
case 407:
case 1178:
case 124:
case 1394:
case 2335:
case 3021:
case 1610:
case 2138:
case 3449:
case 3585:
case 3278:
case 26:
case 2207:
case 2572:
case 297:
case 1741:
case 1565:
case 1500:
case 2575:
case 3943:
case 1519:
case 633:
case 723:
case 1534:
case 789:
case 1760:
case 3065:
case 1876:
case 3540:
case 1774:
case 1881:
case 954:
case 597:
case 813:
case 2701:
case 2871:
case 3463:
case 2224:
case 1571:
case 3843:
case 1664:
case 3461:
case 4060:
case 2890:
case 141:
case 598:
case 2016:
case 3569:
case 2042:
case 2831:
case 2796:
case 663:
case 2704:
case 4047:
case 669:
case 1008:
case 3593:
case 410:
case 2424:
case 2992:
case 563:
case 682:
case 2770:
case 3647:
case 1995:
case 3867:
case 3451:
case 89:
case 2724:
case 2639:
case 2378:
case 3276:
case 1855:
case 3646:
case 2064:
case 1321:
case 1783:
case 3737:
case 2606:
case 2366:
case 3764:
case 1046:
case 2621:
case 1702:
case 4061:
case 897:
case 1038:
case 2470:
case 3149:
case 946:
case 3583:
case 3944:
case 998:
case 98:
case 268:
case 2933:
case 2188:
case 876:
case 144:
case 3355:
case 3947:
case 3425:
case 1826:
case 3577:
case 680:
case 506:
case 3080:
case 1497:
case 3436:
case 1683:
case 19:
case 3331:
case 2067:
case 1597:
case 866:
case 2700:
case 2875:
case 3410:
case 2180:
case 1603:
case 1352:
case 4037:
case 1060:
case 1889:
case 1363:
case 3989:
case 3302:
case 450:
case 1120:
case 3850:
case 2646:
case 206:
case 61:
case 1434:
case 1368:
case 2633:
case 280:
case 4094:
case 3988:
case 3624:
case 714:
case 1314:
case 255:
case 452:
case 3901:
case 194:
case 959:
case 2669:
case 3049:
case 1436:
case 2777:
case 1502:
case 575:
case 2468:
case 3608:
case 3306:
case 2236:
case 3056:
case 841:
case 3195:
case 3481:
case 3320:
case 611:
case 712:
case 1496:
case 2455:
case 3590:
case 779:
case 3117:
case 3884:
case 2499:
case 1243:
case 1897:
case 970:
case 3859:
case 710:
case 3309:
case 856:
case 75:
case 1728:
case 2137:
case 307:
case 1709:
case 3161:
case 1088:
case 32:
case 3948:
case 2591:
case 439:
case 2943:
case 2221:
case 2919:
case 2954:
case 2012:
case 3644:
case 1834:
case 3696:
case 4046:
case 2843:
case 1161:
case 2535:
case 2696:
case 722:
case 318:
case 518:
case 479:
case 870:
case 3475:
case 1669:
case 1848:
case 756:
case 3602:
case 4017:
case 1862:
case 2674:
case 2417:
case 1229:
case 3649:
case 469:
case 2681:
case 3102:
case 2496:
case 1234:
case 1043:
case 1310:
case 3742:
case 1005:
case 2914:
case 281:
case 1591:
case 2527:
case 2391:
case 1011:
case 3853:
case 2038:
case 1918:
case 1908:
case 1976:
case 237:
case 3234:
case 726:
case 3007:
case 1594:
case 1100:
case 136:
case 2008:
case 2706:
case 708:
case 3623:
case 2047:
case 3386:
case 2109:
case 495:
case 4025:
case 2431:
case 1206:
case 382:
case 3181:
case 3815:
case 2862:
case 64:
case 3546:
case 2768:
case 246:
case 3793:
case 2909:
case 2981:
case 4033:
case 1382:
case 1987:
case 2635:
case 1024:
case 1247:
case 672:
case 4010:
case 537:
case 3288:
case 497:
case 1447:
case 1778:
case 3639:
case 4028:
case 1912:
case 3058:
case 869:
case 668:
case 3037:
case 2242:
case 2222:
case 2086:
case 2545:
case 2113:
case 1753:
case 880:
case 4085:
case 2280:
case 3373:
case 616:
case 1221:
case 251:
case 3072:
case 958:
case 419:
case 3369:
case 853:
case 2282:
case 1794:
case 1893:
case 447:
case 828:
case 590:
case 120:
case 2346:
case 363:
case 1758:
case 1296:
case 1551:
case 2771:
case 3224:
case 2303:
case 2638:
case 4083:
case 1085:
case 865:
case 1630:
case 2054:
case 373:
case 3184:
case 18:
case 1967:
case 992:
case 3366:
case 1541:
case 732:
case 921:
case 113:
case 2036:
case 943:
case 3508:
case 2573:
case 3295:
case 2212:
case 1141:
case 3254:
case 2479:
case 286:
case 1466:
case 1871:
case 377:
case 2328:
case 557:
case 1953:
case 2463:
case 2784:
case 794:
case 936:
case 427:
case 961:
case 2702:
case 2447:
case 1063:
case 401:
case 501:
case 2254:
case 2108:
case 1342:
case 3170:
case 956:
case 3182:
case 3174:
case 3274:
case 3619:
case 2746:
case 3428:
case 2601:
case 2524:
case 3155:
case 2774:
case 3974:
case 3208:
case 3339:
case 3530:
case 3343:
case 52:
case 2371:
case 3166:
case 1687:
case 3851:
case 335:
case 3484:
case 2281:
case 3754:
case 3838:
case 533:
case 2863:
case 1116:
case 331:
case 2085:
case 2973:
case 3292:
case 868:
case 1302:
case 2451:
case 2486:
case 1755:
case 3857:
case 1376:
case 2879:
case 2505:
case 221:
case 1797:
case 3008:
case 376:
case 638:
case 3631:
case 511:
case 4012:
case 1715:
case 4081:
case 3730:
case 2201:
case 2270:
case 1257:
case 4093:
case 4073:
case 3243:
case 3556:
case 845:
case 424:
case 3858:
case 3674:
case 689:
case 502:
case 2117:
case 417:
case 2342:
case 3301:
case 3986:
case 2068:
case 3652:
case 1930:
case 1920:
case 2586:
case 4029:
case 488:
case 481:
case 1899:
case 3820:
case 1080:
case 659:
case 585:
case 2795:
case 334:
case 3344:
case 2982:
case 678:
case 1007:
case 2888:
case 2307:
case 2168:
case 2152:
case 1163:
case 1273:
case 1188:
case 2737:
case 3716:
case 3321:
case 3332:
case 3676:
case 1963:
case 894:
case 53:
case 3965:
case 1366:
case 3570:
case 3893:
case 1898:
case 877:
case 2752:
case 321:
case 1474:
case 2144:
case 716:
case 1933:
case 628:
case 3587:
case 93:
case 960:
case 554:
case 2801:
case 1285:
case 3004:
case 1628:
case 3081:
case 142:
case 2630:
case 3525:
case 1044:
case 2891:
case 1965:
case 2129:
case 1407:
case 1266:
case 108:
case 1831:
case 530:
case 2098:
case 1459:
case 3800:
case 2500:
case 3035:
case 1547:
case 3892:
case 1189:
case 2902:
case 3621:
case 1386:
case 1074:
case 3225:
case 3698:
case 2969:
case 1199:
case 2729:
case 1378:
case 3432:
case 3744:
case 570:
case 636:
case 1710:
case 3870:
case 3108:
case 178:
case 512:
case 727:
case 2549:
case 810:
case 903:
case 1768:
case 3724:
case 3265:
case 434:
case 2708:
case 1198:
case 3684:
case 1112:
case 2287:
case 2073:
case 2081:
case 1215:
case 2911:
case 517:
case 3551:
case 1105:
case 2806:
case 1694:
case 1827:
case 1197:
case 1054:
case 2416:
case 2715:
case 333:
case 1725:
case 3014:
case 2611:
case 211:
case 3275:
case 1839:
case 2624:
case 1906:
case 3256:
case 3020:
case 7:
case 1450:
case 947:
case 3581:
case 4018:
case 522:
case 2808:
case 1374:
case 3185:
case 2364:
case 1460:
case 2464:
case 2512:
case 2004:
case 148:
case 352:
case 86:
case 735:
case 3424:
case 2332:
case 824:
case 3750:
case 2352:
case 130:
case 229:
case 3439:
case 648:
case 1961:
case 2123:
case 3311:
case 2410:
case 493:
case 2192:
case 3473:
case 472:
case 3121:
case 138:
case 1491:
case 573:
case 1419:
case 214:
case 324:
case 2755:
case 3480:
case 3044:
case 1220:
case 801:
case 2731:
case 1171:
case 2146:
case 1076:
case 1346:
case 80:
case 3876:
case 1584:
case 675:
case 2656:
case 2323:
case 2340:
case 962:
case 631:
case 730:
case 1335:
case 885:
case 2804:
case 180:
case 2148:
case 963:
case 1355:
case 1387:
case 3709:
case 213:
case 3911:
case 1428:
case 3172:
case 3951:
case 2134:
case 3895:
case 670:
case 3280:
case 918:
case 219:
case 634:
case 1435:
case 3350:
case 404:
case 3328:
case 1244:
case 3839:
case 165:
case 372:
case 3638:
case 3894:
case 99:
case 1070:
case 2894:
case 1151:
case 2832:
case 197:
case 500:
case 2404:
case 3916:
case 3403:
case 822:
case 2727:
case 1056:
case 104:
case 2494:
case 2157:
case 702:
case 2237:
case 2327:
case 1123:
case 2595:
case 1903:
case 2763:
case 3940:
case 31:
case 3322:
case 278:
case 2386:
case 1681:
case 3053:
case 1277:
case 2209:
case 2013:
case 1255:
case 394:
case 964:
case 2440:
case 1282:
case 403:
case 2511:
case 3747:
case 24:
case 665:
case 1756:
case 2819:
case 3908:
case 2940:
case 3418:
case 2647:
case 1134:
case 3828:
case 773:
case 3725:
case 188:
case 1542:
case 1421:
case 2655:
case 408:
case 212:
case 2794:
case 927:
case 2896:
case 745:
case 1523:
case 2106:
case 392:
case 3598:
case 2924:
case 2921:
case 2302:
case 2131:
case 520:
case 3713:
case 860:
case 2379:
case 614:
case 199:
case 3346:
case 1858:
case 3548:
case 1973:
case 2989:
case 1245:
case 2:
case 340:
case 1253:
case 812:
case 2051:
case 2689:
case 3069:
case 2220:
case 1252:
case 3467:
case 168:
case 3632:
case 3300:
case 2020:
case 2217:
case 619:
case 576:
case 2225:
case 653:
case 751:
case 256:
case 566:
case 811:
case 2349:
case 480:
case 2597:
case 364:
case 4058:
case 3771:
case 782:
case 935:
case 179:
case 2626:
case 3834:
case 3890:
case 2678:
case 3955:
case 2533:
case 2097:
case 3761:
case 1552:
case 3998:
case 468:
case 2984:
case 3460:
case 1680:
case 827:
case 817:
case 3327:
case 749:
case 1508:
case 446:
case 3377:
case 4002:
case 2182:
case 232:
case 2692:
case 753:
case 3229:
case 2185:
case 2172:
case 1155:
case 13:
case 471:
case 3802:
case 3206:
case 3765:
case 3086:
case 383:
case 4055:
case 3849:
case 950:
case 3232:
case 3375:
case 3405:
case 913:
case 2298:
case 3387:
case 3862:
case 6:
case 3604:
case 1513:
case 3016:
case 699:
case 1804:
case 3557:
case 3855:
case 792:
case 3625:
case 941:
case 2321:
case 1029:
case 2189:
case 778:
case 4034:
case 1626:
case 690:
case 2116:
case 3749:
case 4064:
case 768:
case 4026:
case 3534:
case 3769:
case 2313:
case 2336:
case 2368:
case 3153:
case 3865:
case 466:
case 2028:
case 3495:
case 1300:
case 2355:
case 3190:
case 1507:
case 600:
case 1182:
case 3051:
case 2866:
case 926:
case 1696:
case 3528:
case 78:
case 3029:
case 3459:
case 3057:
case 2809:
case 258:
case 244:
case 1017:
case 527:
case 948:
case 1275:
case 2886:
case 2230:
case 1238:
case 2781:
case 2002:
case 2685:
case 2176:
case 1156:
case 2241:
case 3672:
case 4087:
case 2526:
case 30:
case 28:
case 3421:
case 2223:
case 2552:
case 3956:
case 1028:
case 3799:
case 1292:
case 2235:
case 1938:
case 3335:
case 1767:
case 3690:
case 1331:
case 3595:
case 4027:
case 3307:
case 162:
case 3880:
case 2870:
case 303:
case 4088:
case 1324:
case 443:
case 3430:
case 2317:
case 1627:
case 190:
case 146:
case 70:
case 3197:
case 322:
case 1176:
case 777:
case 1154:
case 238:
case 1856:
case 2423:
case 3045:
case 3318:
case 3246:
case 2959:
case 2645:
case 388:
case 3167:
case 3105:
case 290:
case 279:
case 3363:
case 1396:
case 3903:
case 560:
case 4067:
case 3541:
case 839:
case 3283:
case 3173:
case 1605:
case 11:
case 2194:
case 3668:
case 2382:
case 1236:
case 477:
case 3031:
case 2373:
case 2414:
case 4071:
case 1193:
case 342:
case 3832:
case 3082:
case 3566:
case 1021:
case 1955:
case 405:
case 2215:
case 2722:
case 23:
case 2433:
case 2581:
case 2571:
case 498:
case 1445:
case 3885:
case 915:
case 2772:
case 849:
case 1462:
case 1801:
case 96:
case 1424:
case 609:
case 695:
case 1567:
case 3218:
case 832:
case 332:
case 1706:
case 1222:
case 642:
case 2872:
case 17:
case 2412:
case 2126:
case 1810:
case 737:
case 591:
case 2159:
case 3960:
case 3078:
case 1847:
case 2837:
case 1721:
case 1256:
case 1258:
case 3146:
case 1561:
case 4069:
case 2596:
case 1808:
case 578:
case 2482:
case 3790:
case 1379:
case 788:
case 2262:
case 2932:
case 160:
case 2065:
case 3442:
case 2936:
case 2676:
case 980:
case 715:
case 2845:
case 4063:
case 2754:
case 1707:
case 3809:
case 1857:
case 3759:
case 2709:
case 1553:
case 3483:
case 2430:
case 1657:
case 542:
case 1528:
case 205:
case 912:
case 348:
case 3159:
case 1395:
case 1004:
case 4032:
case 2136:
case 3565:
case 3001:
case 2413:
case 621:
case 586:
case 1306:
case 1061:
case 2952:
case 1498:
case 983:
case 1533:
case 1001:
case 3999:
case 3656:
case 3930:
case 3905:
case 3050:
case 2093:
case 1585:
case 1525:
case 1062:
case 2821:
case 2987:
case 2248:
case 2711:
case 3596:
case 1524:
case 584:
case 35:
case 3209:
case 3518:
case 436:
case 3233:
case 106:
case 2995:
case 762:
case 3358:
case 435:
case 1328:
case 1830:
case 467:
case 3531:
case 2300:
case 2118:
case 1228:
case 3833:
case 1640:
case 2745:
case 3734:
case 2099:
case 3844:
case 67:
case 3871:
case 3212:
case 3926:
case 1177:
case 547:
case 1233:
case 1094:
case 895:
case 2926:
case 3705:
case 3807:
case 3564:
case 3677:
case 2798:
case 3657:
case 2261:
case 2322:
case 1731:
case 3308:
case 3554:
case 2892:
case 2922:
case 2396:
case 1332:
case 3826:
case 1207:
case 4062:
case 426:
case 20:
case 2344:
case 1643:
case 1470:
case 3214:
case 2232:
case 458:
case 3538:
case 3953:
case 1082:
case 1147:
case 725:
case 754:
case 2356:
case 4041:
case 3917:
case 1068:
case 1586:
case 1941:
case 503:
case 1170:
case 630:
case 601:
case 2560:
case 1026:
case 1183:
case 2449:
case 3664:
case 4057:
case 210:
case 82:
case 767:
case 874:
case 1929:
case 848:
case 2797:
case 272:
case 1403:
case 696:
case 1114:
case 2377:
case 2868:
case 2935:
case 3124:
case 484:
case 3088:
case 3968:
case 2369:
case 1009:
case 499:
case 1787:
case 1096:
case 201:
case 3755:
case 3845:
case 2087:
case 3985:
case 3971:
case 3945:
case 1865:
case 3450:
case 2169:
case 1671:
case 2461:
case 3474:
case 3204:
case 2197:
case 2728:
case 3660:
case 1301:
case 347:
case 3979:
case 2782:
case 783:
case 3454:
case 3588:
case 2141:
case 898:
case 2608:
case 1665:
case 1813:
case 51:
case 798:
case 1791:
case 2310:
case 904:
case 4059:
case 2517:
case 800:
case 2476:
case 610:
case 234:
case 606:
case 2994:
case 1888:
case 88:
case 975:
case 9:
case 1606:
case 3506:
case 3490:
case 2474:
case 830:
case 3348:
case 747:
case 3147:
case 2252:
case 2975:
case 3594:
case 3847:
case 2851:
case 1083:
case 476:
case 3411:
case 1483:
case 896:
case 1989:
case 2485:
case 1548:
case 3074:
case 2956:
case 1785:
case 650:
case 3317:
case 3071:
case 3236:
case 2653:
case 3241:
case 820:
case 2592:
case 3447:
case 351:
case 1167:
case 2944:
case 1853:
case 456:
case 2867:
case 440:
case 3157:
case 1978:
case 2823:
case 1697:
case 2454:
case 3391:
case 796:
case 2460:
case 2949:
case 444:
case 922:
case 2305:
case 3497:
case 1312:
case 2765:
case 2514:
case 2721:
case 2960:
case 1789:
case 2829:
case 3137:
case 3093:
case 1092:
case 2688:
case 3394:
case 3472:
case 3810:
case 455:
case 523:
case 2032:
case 3201:
case 2690:
case 1960:
case 2610:
case 3191:
case 3906:
case 2345:
case 2149:
case 2625:
case 487:
case 1216:
case 2666:
case 4030:
case 2297:
case 73:
case 248:
case 1136:
case 2473:
case 3505:
case 250:
case 1998:
case 2462:
case 581:
case 3860:
case 92:
case 3854:
case 969:
case 1727:
case 326:
case 3006:
case 295:
case 4092:
case 416:
case 3226:
case 69:
case 2260:
case 2893:
case 3009:
case 1775:
case 2791:
case 3921:
case 1985:
case 2337:
case 2186:
case 2813:
case 1904:
case 1133:
case 1097:
case 2723:
case 101:
case 2788:
case 135:
case 2480:
case 1518:
case 2876:
case 3444:
case 791:
case 2650:
case 361:
case 461:
case 1073:
case 3494:
case 852:
case 1451:
case 574:
case 76:
case 855:
case 2986:
case 1536:
case 77:
case 2983:
case 3977:
case 319:
case 3485:
case 4005:
case 2023:
case 3215:
case 3399:
case 176:
case 59:
case 2805:
case 2510:
case 2044:
case 583:
case 568:
case 1748:
case 2659:
case 181:
case 3498:
case 3169:
case 558:
case 1682:
case 1438:
case 1002:
case 37:
case 1821:
case 2115:
case 556:
case 1916:
case 366:
case 1139:
case 1870:
case 2409:
case 652:
case 952:
case 2961:
case 1232:
case 1488:
case 2857:
case 1458:
case 267:
case 1966:
case 3066:
case 953:
case 3912:
case 270:
case 2420:
case 4084:
case 1750:
case 1545:
case 808:
case 3179:
case 3539:
case 3775:
case 1942:
case 3889:
case 367:
case 2776:
case 2003:
case 3816:
case 109:
case 3899:
case 1482:
case 2590:
case 3784:
case 3113:
case 717:
case 1909:
case 3576:
case 3692:
case 3482:
case 990:
case 3:
case 3211:
case 2742:
case 292:
case 1595:
case 3427:
case 1383:
case 3047:
case 2569:
case 3239:
case 3938:
case 1410:
case 887:
case 1745:
case 1988:
case 1246:
case 802:
case 1298:
case 1991:
case 462:
case 387:
case 1319:
case 772:
case 3640:
case 2749:
case 825:
case 330:
case 1432:
case 1517:
case 3694:
case 2660:
case 1964:
case 1343:
case 1042:
case 1045:
case 1718:
case 2227:
case 721:
case 1058:
case 1633:
case 2034:
case 1270:
case 156:
case 2751:
case 143:
case 325:
case 571:
case 2448:
case 3695:
case 2465:
case 296:
case 1562:
case 2255:
case 3601:
case 1370:
case 271:
case 2593:
case 3726:
case 1055:
case 693:
case 2046:
case 637:
case 1039:
case 595:
case 5:
case 3258:
case 1473:
case 781:
case 406:
case 3836:
case 3941:
case 240:
case 2814:
case 3150:
case 398:
case 1065:
case 2213:
case 724:
case 3555:
case 3477:
case 2142:
case 2670:
case 3655:
case 1701:
case 1391:
case 2779:
case 3575:
case 2289:
case 302:
case 3842:
case 1660:
case 2818:
case 916:
case 3733:
case 2147:
case 2529:
case 561:
case 1573:
case 731:
case 1511:
case 379:
case 2750:
case 1036:
case 3359:
case 2078:
case 2895:
case 2615:
case 908:
case 2319:
case 879:
case 3396:
case 2399:
case 328:
case 3140:
case 1401:
case 491:
case 3390:
case 2459:
case 3760:
case 1647:
case 3431:
case 3142:
case 2756:
case 1329:
case 2966:
case 344:
case 2558:
case 982:
case 3005:
case 3465:
case 1437:
case 1732:
case 3193:
case 174:
case 838:
case 2199:
case 4019:
case 1654:
case 2175:
case 3798:
case 3537:
case 3547:
case 1219:
case 1192:
case 3249:
case 2405:
case 1504:
case 3523:
case 932:
case 2691:
case 769:
case 3087:
case 3863:
case 3992:
case 2324:
case 1636:
case 422:
case 2478:
case 2733:
case 1724:
case 3886:
case 2167:
case 1886:
case 193:
case 2548:
case 3133:
case 3823:
case 1781:
case 3129:
case 1381:
case 1705:
case 3370:
case 1954:
case 1157:
case 3010:
case 259:
case 3067:
case 2457:
case 1414:
case 1041:
case 3298:
case 1265:
case 632:
case 1337:
case 2069:
case 453:
case 2849:
case 1601:
case 1924:
case 1000:
case 3092:
case 2111:
case 661:
case 2978:
case 1996:
case 2634:
case 2564:
case 2056:
case 1271:
case 3873:
case 3996:
case 2642:
case 1958:
case 3589:
case 200:
case 489:
case 224:
case 2675:
case 2005:
case 3304:
case 3896:
case 2259:
case 1793:
case 2154:
case 3089:
case 2682:
case 646:
case 3259:
case 871:
case 3683:
case 3413:
case 354:
case 1790:
case 1777:
case 3924:
case 2219:
case 2483:
case 1685:
case 3223:
case 3392:
case 3542:
case 3075:
case 3669:
case 607:
case 1480:
case 3874:
case 2980:
case 3630:
case 2229:
case 1959:
case 3786:
case 1537:
case 4021:
case 2295:
case 1361:
case 1629:
case 1957:
case 3143:
case 736:
case 2997:
case 3918:
case 1717:
case 2059:
case 1351:
case 1330:
case 2848:
case 1187:
case 2663:
case 2266:
case 720:
case 516:
case 1587:
case 1345:
case 3887:
case 3933:
case 3151:
case 676:
case 1984:
case 2403:
case 2060:
case 2475:
case 262:
case 1495:
case 2833:
case 640:
case 1615:
case 2882:
case 1795:
case 2389:
case 4043:
case 370:
case 2917:
case 2811:
case 4035:
case 1868:
case 541:
case 2717:
case 1975:
case 1315:
case 3516:
case 2372:
case 2258:
case 981:
case 599:
case 1563:
case 3500:
case 2636:
case 1510:
case 1106:
case 66:
case 3636:
case 72:
case 3043:
case 1129:
case 1086:
case 252:
case 1431:
case 2877:
case 3781:
case 593:
case 2421:
case 1471:
case 2528:
case 1201:
case 2947:
case 882:
case 2441:
case 3094:
case 774:
case 91:
case 3134:
case 263:
case 2521:
case 3579:
case 1426:
case 3478:
case 2286:
case 1393:
case 284:
case 2243:
case 62:
case 2654:
case 2489:
case 1484:
case 550:
case 46:
case 1420:
case 1634:
case 532:
case 4016:
case 412:
case 21:
case 1289:
case 2477:
case 1181:
case 3041:
case 1308:
case 900:
case 182:
case 3336:
case 1143:
case 2160:
case 3338:
case 1135:
case 3543:
case 529:
case 1684:
case 1249:
case 2135:
case 2967:
case 254:
case 3429:
case 1077:
case 2607:
case 3686:
case 3315:
case 3347:
case 1457:
case 3365:
case 3567:
case 1349:
case 1326:
case 2934:
case 3303:
case 3610:
case 2234:
case 986:
case 3961:
case 317:
case 2580:
case 1348:
case 629:
case 2083:
case 1104:
case 358:
case 1982:
case 1180:
case 1175:
case 2883:
case 2365:
case 1779:
case 2640:
case 454:
case 3902:
case 893:
case 2488:
case 3856:
case 3675:
case 287:
case 2007:
case 3325:
case 1950:
case 245:
case 3920:
case 1576:
case 919:
case 2915:
case 14:
case 3774:
case 3699:
case 878:
case 2145:
case 1427:
case 3927:
case 1217:
case 664:
case 2435:
case 2668:
case 3395:
case 686:
case 2124:
case 1422:
case 74:
case 4090:
case 3991:
case 2622:
case 305:
case 1373:
case 1469:
case 2422:
case 2523:
case 3382:
case 752:
case 613:
case 2155:
case 3371:
case 103:
case 1618:
case 1723:
case 3356:
case 338:
case 1624:
case 4070:
case 2979:
case 3962:
case 1968:
case 770:
case 2273:
case 2456:
case 2503:
case 1726:
case 2387:
case 2179:
case 2120:
case 137:
case 186:
case 3412:
case 2741:
case 3502:
case 384:
case 3231:
case 3489:
case 3187:
case 1344:
case 854:
case 1757:
case 3712:
case 837:
case 1179:
case 2402:
case 3476:
case 2907:
case 2165:
case 580:
case 2325:
case 2100:
case 1131:
case 2177:
case 3244:
case 1874:
case 1018:
case 2856:
case 1358:
case 3605:
case 3970:
case 1049:
case 2024:
case 2970:
case 1637:
case 1613:
case 2375:
case 2694:
case 33:
case 2049:
case 16:
case 1935:
case 1863:
case 1108:
case 2613:
case 3707:
case 2955:
case 1190:
case 3958:
case 1555:
case 3919:
case 34:
case 1268:
case 1372:
case 2900:
case 3285:
case 3868:
case 420:
case 3645:
case 1540:
case 3824:
case 2218:
case 2817:
case 155:
case 538:
case 3493:
case 1353:
case 3414:
case 3333:
case 806:
case 2121:
case 1869:
case 1761:
case 1412:
case 2407:
case 3550:
case 1867:
case 1364:
case 1149:
case 3352:
case 1689:
case 2554:
case 2507:
case 744:
case 3378:
case 3768:
case 1746:
case 3253:
case 1119:
case 12:
case 3994:
case 704:
case 2897:
case 1932:
case 3287:
case 666:
case 3715:
case 3260:
case 1656:
case 2484:
case 1851:
case 1350:
case 757:
case 2705:
case 2296:
case 540:
case 2284:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1710723601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,];
var gg_b = "1710723601/";

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
