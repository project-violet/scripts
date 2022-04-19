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
case 2938:
case 3927:
case 3707:
case 581:
case 3183:
case 1093:
case 3104:
case 2718:
case 1095:
case 1771:
case 1847:
case 3211:
case 3875:
case 179:
case 3571:
case 238:
case 2246:
case 1606:
case 1428:
case 3780:
case 1230:
case 3305:
case 1546:
case 3341:
case 1542:
case 3343:
case 2819:
case 3333:
case 180:
case 3058:
case 2721:
case 1447:
case 81:
case 1815:
case 914:
case 529:
case 3540:
case 1206:
case 2309:
case 957:
case 2004:
case 2621:
case 1192:
case 3785:
case 1434:
case 1352:
case 836:
case 2447:
case 165:
case 2742:
case 3616:
case 651:
case 1521:
case 698:
case 2536:
case 3314:
case 2975:
case 2035:
case 2364:
case 1128:
case 2444:
case 3463:
case 3123:
case 3263:
case 3406:
case 142:
case 131:
case 1544:
case 2008:
case 3231:
case 2687:
case 940:
case 1722:
case 958:
case 2545:
case 3795:
case 473:
case 3302:
case 2682:
case 1358:
case 526:
case 1644:
case 425:
case 3427:
case 1660:
case 2130:
case 2019:
case 2575:
case 2906:
case 2910:
case 3121:
case 1341:
case 219:
case 1742:
case 384:
case 2835:
case 415:
case 3455:
case 2459:
case 964:
case 609:
case 3098:
case 3072:
case 1279:
case 248:
case 1545:
case 3215:
case 530:
case 2140:
case 3425:
case 3949:
case 3042:
case 1302:
case 2793:
case 1912:
case 1090:
case 1050:
case 3322:
case 1244:
case 708:
case 1180:
case 3475:
case 815:
case 1954:
case 2404:
case 2061:
case 1887:
case 3400:
case 3294:
case 3787:
case 231:
case 3812:
case 1099:
case 2033:
case 1163:
case 1759:
case 3793:
case 3548:
case 3219:
case 3951:
case 4012:
case 2530:
case 2698:
case 2548:
case 1100:
case 3752:
case 373:
case 3992:
case 1579:
case 1421:
case 1788:
case 2428:
case 2083:
case 3658:
case 2132:
case 1140:
case 253:
case 2369:
case 2946:
case 1147:
case 2689:
case 3613:
case 3943:
case 27:
case 2727:
case 983:
case 3376:
case 2566:
case 11:
case 3620:
case 2752:
case 2781:
case 20:
case 1768:
case 1936:
case 3158:
case 3630:
case 372:
case 4066:
case 210:
case 82:
case 2221:
case 406:
case 2540:
case 583:
case 1245:
case 2378:
case 621:
case 2769:
case 522:
case 2129:
case 3517:
case 3919:
case 614:
case 712:
case 1855:
case 2531:
case 1920:
case 405:
case 2488:
case 2484:
case 2867:
case 2850:
case 1258:
case 1416:
case 3797:
case 105:
case 2642:
case 891:
case 2963:
case 765:
case 2408:
case 89:
case 456:
case 1939:
case 2201:
case 1608:
case 3395:
case 54:
case 3642:
case 1286:
case 3405:
case 718:
case 3160:
case 1207:
case 706:
case 3937:
case 2187:
case 2844:
case 525:
case 3029:
case 287:
case 2041:
case 3859:
case 669:
case 2516:
case 1390:
case 3990:
case 2124:
case 5:
case 33:
case 2529:
case 3109:
case 127:
case 976:
case 3586:
case 2461:
case 1537:
case 2965:
case 3318:
case 2962:
case 3283:
case 3449:
case 2964:
case 2167:
case 2113:
case 668:
case 2382:
case 3564:
case 1894:
case 803:
case 2220:
case 2433:
case 852:
case 1714:
case 1822:
case 1683:
case 3756:
case 499:
case 7:
case 2379:
case 1510:
case 4048:
case 2779:
case 3500:
case 222:
case 1946:
case 666:
case 1807:
case 4009:
case 2754:
case 4034:
case 643:
case 3439:
case 3180:
case 79:
case 2860:
case 3606:
case 3020:
case 1744:
case 2105:
case 2077:
case 1851:
case 1503:
case 2627:
case 2982:
case 1458:
case 3178:
case 1838:
case 3701:
case 3874:
case 452:
case 1250:
case 1475:
case 1723:
case 298:
case 50:
case 1575:
case 1749:
case 3653:
case 3206:
case 45:
case 4091:
case 3570:
case 2191:
case 250:
case 1638:
case 3935:
case 589:
case 3136:
case 264:
case 3417:
case 1902:
case 2659:
case 2577:
case 2878:
case 3201:
case 1504:
case 3569:
case 429:
case 2139:
case 3257:
case 2069:
case 1231:
case 738:
case 3552:
case 2452:
case 4007:
case 3085:
case 1467:
case 1023:
case 1092:
case 444:
case 1964:
case 2170:
case 1024:
case 1980:
case 457:
case 4053:
case 688:
case 2726:
case 338:
case 320:
case 1999:
case 144:
case 1240:
case 3980:
case 894:
case 3777:
case 1191:
case 1248:
case 1046:
case 382:
case 1818:
case 2612:
case 2771:
case 917:
case 1122:
case 3282:
case 3138:
case 3896:
case 1876:
case 1438:
case 2586:
case 3265:
case 2591:
case 2232:
case 559:
case 949:
case 2630:
case 2792:
case 3350:
case 1839:
case 2740:
case 1036:
case 1966:
case 795:
case 3147:
case 3810:
case 311:
case 2249:
case 2690:
case 3067:
case 1769:
case 3860:
case 321:
case 2445:
case 51:
case 2336:
case 2716:
case 1002:
case 1580:
case 3440:
case 1305:
case 3661:
case 1556:
case 1431:
case 796:
case 4090:
case 1235:
case 1705:
case 952:
case 3222:
case 1882:
case 3373:
case 2567:
case 3358:
case 2075:
case 1152:
case 3734:
case 2213:
case 1658:
case 2441:
case 1216:
case 4094:
case 2145:
case 1854:
case 3432:
case 2306:
case 3590:
case 610:
case 1700:
case 2338:
case 2332:
case 4:
case 3467:
case 653:
case 1890:
case 2261:
case 59:
case 1629:
case 1550:
case 939:
case 2138:
case 503:
case 1669:
case 1465:
case 1169:
case 3647:
case 532:
case 3908:
case 2001:
case 1080:
case 2231:
case 576:
case 181:
case 3827:
case 233:
case 3450:
case 972:
case 700:
case 1097:
case 1986:
case 3582:
case 3823:
case 3226:
case 3979:
case 2422:
case 36:
case 1115:
case 2974:
case 889:
case 3361:
case 584:
case 3163:
case 568:
case 2074:
case 4055:
case 1263:
case 1659:
case 3953:
case 1900:
case 3786:
case 2822:
case 1119:
case 2677:
case 947:
case 1460:
case 1478:
case 1777:
case 1333:
case 2110:
case 3398:
case 1006:
case 468:
case 555:
case 2491:
case 2735:
case 3223:
case 2782:
case 2807:
case 1987:
case 3633:
case 1615:
case 1451:
case 1592:
case 2308:
case 1395:
case 3513:
case 163:
case 3695:
case 1419:
case 3209:
case 2988:
case 1312:
case 3848:
case 509:
case 1300:
case 1057:
case 3857:
case 2401:
case 2323:
case 1420:
case 2832:
case 3718:
case 19:
case 2883:
case 3327:
case 1536:
case 1662:
case 1048:
case 1031:
case 2900:
case 2614:
case 4042:
case 3784:
case 797:
case 2581:
case 1957:
case 3637:
case 2502:
case 1013:
case 813:
case 120:
case 335:
case 2560:
case 3092:
case 644:
case 832:
case 247:
case 3897:
case 4056:
case 3791:
case 1604:
case 2203:
case 713:
case 2234:
case 2911:
case 812:
case 1578:
case 3116:
case 1041:
case 2365:
case 3555:
case 4027:
case 2877:
case 1857:
case 1958:
case 3921:
case 4078:
case 2127:
case 2292:
case 3184:
case 1072:
case 848:
case 1366:
case 3256:
case 3867:
case 2165:
case 334:
case 3287:
case 3994:
case 2652:
case 3595:
case 3959:
case 2990:
case 3625:
case 3081:
case 564:
case 1789:
case 1641:
case 440:
case 2259:
case 1529:
case 2776:
case 699:
case 0:
case 3438:
case 2504:
case 1288:
case 2997:
case 2331:
case 2749:
case 2551:
case 2015:
case 3544:
case 494:
case 1172:
case 186:
case 3974:
case 2904:
case 587:
case 650:
case 2916:
case 1799:
case 95:
case 2118:
case 3316:
case 453:
case 426:
case 1293:
case 484:
case 982:
case 965:
case 293:
case 3515:
case 2885:
case 1061:
case 3186:
case 225:
case 3912:
case 974:
case 3453:
case 152:
case 1197:
case 3253:
case 3650:
case 1254:
case 2208:
case 1633:
case 1142:
case 955:
case 2451:
case 2034:
case 1684:
case 992:
case 1249:
case 2158:
case 3976:
case 948:
case 70:
case 1067:
case 1804:
case 3932:
case 527:
case 3672:
case 2025:
case 4041:
case 2496:
case 2257:
case 1319:
case 3478:
case 113:
case 199:
case 2173:
case 182:
case 3274:
case 3462:
case 242:
case 3993:
case 1156:
case 3093:
case 3697:
case 1667:
case 66:
case 361:
case 580:
case 3999:
case 1289:
case 1474:
case 3345:
case 1363:
case 3666:
case 3429:
case 2450:
case 385:
case 1569:
case 1007:
case 3527:
case 262:
case 302:
case 2278:
case 2937:
case 1791:
case 2348:
case 386:
case 793:
case 72:
case 1109:
case 1732:
case 1710:
case 2915:
case 3883:
case 139:
case 3484:
case 3409:
case 4045:
case 3869:
case 844:
case 3768:
case 4024:
case 2320:
case 2081:
case 28:
case 1194:
case 327:
case 2934:
case 310:
case 4076:
case 2947:
case 1944:
case 973:
case 3001:
case 3473:
case 608:
case 2675:
case 1713:
case 3742:
case 2922:
case 659:
case 1066:
case 1317:
case 1118:
case 150:
case 1039:
case 1003:
case 3064:
case 2553:
case 3045:
case 1203:
case 1811:
case 2016:
case 167:
case 408:
case 1202:
case 1565:
case 553:
case 2078:
case 1823:
case 1805:
case 2760:
case 3115:
case 1370:
case 421:
case 1483:
case 3863:
case 3767:
case 3424:
case 2746:
case 531:
case 747:
case 829:
case 3434:
case 2693:
case 3709:
case 1704:
case 2206:
case 285:
case 3969:
case 1897:
case 3712:
case 1010:
case 3750:
case 1584:
case 292:
case 805:
case 953:
case 2283:
case 29:
case 2775:
case 301:
case 3783:
case 3557:
case 2564:
case 944:
case 391:
case 1928:
case 2809:
case 566:
case 1473:
case 2094:
case 2337:
case 1004:
case 2655:
case 3816:
case 2532:
case 1224:
case 2741:
case 800:
case 3157:
case 961:
case 240:
case 1519:
case 2376:
case 1425:
case 2470:
case 2815:
case 1678:
case 3710:
case 441:
case 2363:
case 990:
case 3110:
case 3735:
case 2432:
case 2048:
case 552:
case 1978:
case 945:
case 3840:
case 297:
case 128:
case 3194:
case 3054:
case 2579:
case 1891:
case 3203:
case 2818:
case 2848:
case 519:
case 754:
case 3546:
case 1063:
case 1489:
case 1945:
case 3955:
case 2051:
case 2166:
case 2060:
case 8:
case 2561:
case 2018:
case 1378:
case 1516:
case 1290:
case 3803:
case 3514:
case 567:
case 2322:
case 3770:
case 2979:
case 2026:
case 2175:
case 234:
case 85:
case 3660:
case 3264:
case 591:
case 3007:
case 2164:
case 2794:
case 3187:
case 2925:
case 145:
case 1937:
case 1414:
case 3251:
case 3677:
case 90:
case 2409:
case 481:
case 3690:
case 1027:
case 3412:
case 3643:
case 1583:
case 2168:
case 1287:
case 3046:
case 2810:
case 214:
case 3208:
case 979:
case 1663:
case 3306:
case 3655:
case 1991:
case 3772:
case 1196:
case 3998:
case 1977:
case 910:
case 3789:
case 1716:
case 1402:
case 3002:
case 2412:
case 971:
case 75:
case 1393:
case 3550:
case 3402:
case 912:
case 2300:
case 2492:
case 1627:
case 1724:
case 1171:
case 3948:
case 748:
case 1965:
case 1597:
case 254:
case 2006:
case 2852:
case 2002:
case 3362:
case 2683:
case 3825:
case 451:
case 3214:
case 1218:
case 574:
case 414:
case 229:
case 2724:
case 2986:
case 1021:
case 352:
case 4016:
case 3811:
case 1407:
case 785:
case 2317:
case 806:
case 1872:
case 3747:
case 369:
case 3299:
case 3965:
case 617:
case 64:
case 702:
case 1270:
case 1335:
case 3511:
case 368:
case 1125:
case 1715:
case 2799:
case 2762:
case 2427:
case 2733:
case 1179:
case 2777:
case 4038:
case 3967:
case 3056:
case 3591:
case 2931:
case 1852:
case 1609:
case 1952:
case 195:
case 442:
case 2293:
case 4004:
case 3037:
case 3122:
case 1271:
case 3779:
case 2847:
case 1701:
case 9:
case 2953:
case 3173:
case 303:
case 2940:
case 2199:
case 1698:
case 330:
case 3608:
case 2517:
case 1885:
case 3260:
case 578:
case 2805:
case 3141:
case 4072:
case 2384:
case 2163:
case 3396:
case 2623:
case 1116:
case 827:
case 1011:
case 3628:
case 885:
case 2455:
case 419:
case 3102:
case 2914:
case 3615:
case 4032:
case 3321:
case 1186:
case 155:
case 2544:
case 2344:
case 3168:
case 4028:
case 3813:
case 1485:
case 2565:
case 667:
case 106:
case 2301:
case 3732:
case 170:
case 1353:
case 2212:
case 3776:
case 3048:
case 3682:
case 3140:
case 2602:
case 2285:
case 2426:
case 1539:
case 1418:
case 3885:
case 2961:
case 166:
case 2995:
case 3802:
case 1955:
case 968:
case 2161:
case 1918:
case 3798:
case 770:
case 3407:
case 1272:
case 3149:
case 3285:
case 1089:
case 3659:
case 356:
case 751:
case 3771:
case 724:
case 3291:
case 197:
case 1856:
case 357:
case 416:
case 290:
case 12:
case 865:
case 3644:
case 2887:
case 2011:
case 209:
case 275:
case 3916:
case 151:
case 2000:
case 3656:
case 899:
case 2258:
case 3388:
case 158:
case 364:
case 318:
case 2872:
case 115:
case 1764:
case 1602:
case 780:
case 2281:
case 760:
case 3528:
case 2215:
case 3634:
case 622:
case 1117:
case 3618:
case 100:
case 2935:
case 1878:
case 1038:
case 146:
case 590:
case 21:
case 68:
case 3297:
case 3612:
case 3193:
case 1297:
case 446:
case 550:
case 2137:
case 2095:
case 1274:
case 3545:
case 616:
case 2789:
case 1432:
case 3796:
case 3084:
case 208:
case 3962:
case 3483:
case 1059:
case 3566:
case 220:
case 1326:
case 1435:
case 1479:
case 3585:
case 3259:
case 856:
case 46:
case 1223:
case 942:
case 3626:
case 1108:
case 3778:
case 2625:
case 3050:
case 1619:
case 60:
case 1974:
case 2009:
case 3289:
case 2725:
case 3753:
case 2889:
case 3124:
case 1487:
case 2196:
case 1193:
case 1870:
case 3004:
case 2706:
case 3945:
case 3049:
case 213:
case 3034:
case 3524:
case 1613:
case 2834:
case 2941:
case 2694:
case 571:
case 3454:
case 1984:
case 2314:
case 3731:
case 816:
case 3580:
case 1909:
case 2803:
case 586:
case 3247:
case 2924:
case 1298:
case 3339:
case 570:
case 2902:
case 3686:
case 1491:
case 1968:
case 3012:
case 3003:
case 2321:
case 2316:
case 2054:
case 1661:
case 1168:
case 149:
case 71:
case 4073:
case 1350:
case 1767:
case 16:
case 1520:
case 3692:
case 3337:
case 1610:
case 2823:
case 2831:
case 850:
case 31:
case 3843:
case 1511:
case 2247:
case 737:
case 2029:
case 1729:
case 112:
case 3815:
case 2811:
case 732:
case 731:
case 1301:
case 207:
case 55:
case 480:
case 984:
case 4092:
case 655:
case 3602:
case 2454:
case 3938:
case 3985:
case 1174:
case 2385:
case 2851:
case 2892:
case 3879:
case 3005:
case 1687:
case 3740:
case 1727:
case 1213:
case 2442:
case 1448:
case 703:
case 86:
case 1735:
case 1702:
case 2826:
case 918:
case 762:
case 1408:
case 3166:
case 646:
case 2217:
case 3371:
case 1990:
case 1281:
case 2954:
case 1069:
case 3230:
case 1913:
case 2641:
case 2821:
case 2468:
case 1136:
case 2798:
case 2440:
case 2653:
case 3814:
case 1898:
case 781:
case 1572:
case 833:
case 1148:
case 1866:
case 2570:
case 191:
case 626:
case 1410:
case 2661:
case 3539:
case 2244:
case 3212:
case 2829:
case 2554:
case 2702:
case 3986:
case 1308:
case 2987:
case 1653:
case 959:
case 1200:
case 1044:
case 750:
case 3382:
case 577:
case 3360:
case 3668:
case 2750:
case 3000:
case 733:
case 496:
case 2155:
case 482:
case 283:
case 3310:
case 3964:
case 3829:
case 1588:
case 3027:
case 3155:
case 2093:
case 326:
case 3638:
case 3654:
case 981:
case 998:
case 1138:
case 3346:
case 3451:
case 1981:
case 1078:
case 2058:
case 2599:
case 3640:
case 1009:
case 1827:
case 3038:
case 3683:
case 2853:
case 3963:
case 2858:
case 2903:
case 177:
case 1374:
case 2638:
case 1773:
case 4067:
case 1160:
case 1796:
case 2239:
case 3622:
case 1647:
case 2594:
case 2983:
case 2674:
case 41:
case 546:
case 1316:
case 1486:
case 1655:
case 2932:
case 1865:
case 2637:
case 2295:
case 3471:
case 3416:
case 3355:
case 3512:
case 304:
case 3255:
case 3720:
case 1204:
case 1436:
case 1227:
case 1005:
case 2538:
case 3179:
case 2202:
case 3112:
case 2500:
case 67:
case 3272:
case 3016:
case 1941:
case 2588:
case 1772:
case 1623:
case 2650:
case 2:
case 763:
case 3781:
case 2328:
case 2241:
case 2664:
case 2181:
case 2490:
case 1347:
case 697:
case 2680:
case 1720:
case 1381:
case 1462:
case 3775:
case 377:
case 3422:
case 1672:
case 623:
case 2091:
case 1444:
case 1411:
case 2056:
case 814:
case 801:
case 1184:
case 1239:
case 2345:
case 493:
case 324:
case 1161:
case 2038:
case 3646:
case 2514:
case 1361:
case 124:
case 849:
case 2720:
case 2423:
case 3572:
case 3441:
case 1498:
case 2157:
case 2334:
case 3204:
case 2276:
case 863:
case 1795:
case 1758:
case 3266:
case 3693:
case 4074:
case 2282:
case 97:
case 2619:
case 1694:
case 3172:
case 3374:
case 956:
case 3760:
case 3926:
case 3981:
case 3323:
case 1681:
case 1112:
case 1459:
case 1850:
case 839:
case 2521:
case 1809:
case 1736:
case 407:
case 387:
case 266:
case 2253:
case 3689:
case 4021:
case 1051:
case 538:
case 2391:
case 978:
case 520:
case 672:
case 900:
case 4080:
case 1178:
case 1506:
case 3801:
case 1167:
case 3593:
case 2088:
case 2179:
case 2958:
case 2252:
case 705:
case 1901:
case 2695:
case 2882:
case 1311:
case 542:
case 3363:
case 3847:
case 2106:
case 422:
case 1187:
case 2563:
case 2948:
case 1618:
case 239:
case 547:
case 497:
case 2242:
case 3726:
case 1205:
case 2610:
case 6:
case 4068:
case 2121:
case 2512:
case 2284:
case 4026:
case 545:
case 840:
case 3437:
case 188:
case 3031:
case 379:
case 2788:
case 2402:
case 3062:
case 1144:
case 3137:
case 1737:
case 1983:
case 3507:
case 3466:
case 2343:
case 3319:
case 2520:
case 716:
case 2080:
case 2513:
case 516:
case 537:
case 3174:
case 2205:
case 1073:
case 3073:
case 2797:
case 539:
case 135:
case 1058:
case 291:
case 2133:
case 2479:
case 3435:
case 1134:
case 3833:
case 3592:
case 4031:
case 677:
case 423:
case 3903:
case 3913:
case 2508:
case 192:
case 3275:
case 1083:
case 2333:
case 268:
case 1515:
case 707:
case 299:
case 3328:
case 988:
case 2907:
case 4010:
case 467:
case 3751:
case 3529:
case 3103:
case 2148:
case 1469:
case 2264:
case 3538:
case 2014:
case 3907:
case 3621:
case 2890:
case 2388:
case 1719:
case 1497:
case 788:
case 2448:
case 49:
case 34:
case 3232:
case 153:
case 1778:
case 2013:
case 294:
case 3968:
case 3574:
case 3573:
case 2879:
case 1430:
case 1127:
case 1499:
case 2183:
case 2477:
case 923:
case 1555:
case 3151:
case 282:
case 3975:
case 4022:
case 3894:
case 975:
case 2107:
case 1047:
case 1262:
case 159:
case 524:
case 3989:
case 661:
case 2748:
case 2709:
case 2353:
case 339:
case 1082:
case 967:
case 2846:
case 2772:
case 3662:
case 3762:
case 3970:
case 2635:
case 1784:
case 3370:
case 1533:
case 2992:
case 994:
case 2696:
case 3609:
case 347:
case 920:
case 3956:
case 1692:
case 3799:
case 3657:
case 495:
case 997:
case 4057:
case 3619:
case 1068:
case 2389:
case 1064:
case 2046:
case 1605:
case 2326:
case 2618:
case 2392:
case 355:
case 2874:
case 1650:
case 2151:
case 3716:
case 695:
case 3739:
case 3148:
case 504:
case 2472:
case 2928:
case 727:
case 2955:
case 739:
case 1594:
case 258:
case 878:
case 2134:
case 3390:
case 2373:
case 359:
case 2539:
case 1741:
case 3228:
case 1484:
case 4040:
case 1589:
case 3960:
case 2099:
case 3308:
case 1188:
case 2648:
case 2839:
case 1932:
case 3940:
case 1645:
case 4095:
case 3858:
case 3111:
case 2430:
case 1868:
case 3307:
case 2313:
case 3645:
case 1217:
case 3252:
case 2489:
case 2505:
case 1960:
case 3743:
case 1880:
case 1257:
case 1976:
case 1530:
case 62:
case 3198:
case 3401:
case 3269:
case 2643:
case 3431:
case 3182:
case 3983:
case 2319:
case 1695:
case 296:
case 1253:
case 3632:
case 3332:
case 3011:
case 147:
case 3553:
case 3694:
case 1055:
case 704:
case 2131:
case 2629:
case 1988:
case 1903:
case 271:
case 1895:
case 161:
case 2204:
case 2678:
case 3267:
case 4089:
case 876:
case 1908:
case 674:
case 2437:
case 767:
case 741:
case 1783:
case 3195:
case 2873:
case 1591:
case 4019:
case 3447:
case 941:
case 1102:
case 1707:
case 627:
case 3988:
case 1919:
case 3769:
case 3281:
case 934:
case 479:
case 168:
case 409:
case 2669:
case 2778:
case 834:
case 1889:
case 224:
case 176:
case 3946:
case 1185:
case 2708:
case 3510:
case 2603:
case 1070:
case 2813:
case 3587:
case 306:
case 2576:
case 171:
case 1979:
case 2037:
case 273:
case 3326:
case 1332:
case 1628:
case 1320:
case 3479:
case 1446:
case 1557:
case 1636:
case 2335:
case 3532:
case 2193:
case 1738:
case 1412:
case 3727:
case 3014:
case 3175:
case 2271:
case 1422:
case 1793:
case 2550:
case 3842:
case 2269:
case 2966:
case 1883:
case 175:
case 3876:
case 2518:
case 2840:
case 3542:
case 1104:
case 563:
case 2090:
case 2534:
case 2535:
case 164:
case 1283:
case 1922:
case 3744:
case 2346:
case 410:
case 2115:
case 692:
case 3987:
case 1502:
case 189:
case 2996:
case 2751:
case 2632:
case 3348:
case 134:
case 1126:
case 3509:
case 4029:
case 2222:
case 2837:
case 37:
case 3383:
case 3617:
case 2657:
case 681:
case 2861:
case 4077:
case 618:
case 2039:
case 826:
case 437:
case 1570:
case 3240:
case 2528:
case 3518:
case 2857:
case 2387:
case 719:
case 929:
case 3821:
case 3504:
case 2307:
case 1380:
case 1612:
case 1368:
case 3250:
case 3563:
case 2524:
case 2697:
case 2021:
case 3715:
case 778:
case 393:
case 2684:
case 1107:
case 3846:
case 744:
case 1131:
case 30:
case 2211:
case 286:
case 3490:
case 1087:
case 1993:
case 1056:
case 3562:
case 3741:
case 2027:
case 913:
case 2660:
case 3766:
case 1344:
case 991:
case 2352:
case 3080:
case 2808:
case 823:
case 523:
case 2458:
case 3170:
case 2607:
case 641:
case 911:
case 969:
case 1652:
case 946:
case 3169:
case 3670:
case 3426:
case 573:
case 1886:
case 1369:
case 3164:
case 873:
case 656:
case 3095:
case 2224:
case 3995:
case 3129:
case 2951:
case 749:
case 3394:
case 3277:
case 2541:
case 1947:
case 1925:
case 4043:
case 156:
case 3494:
case 3030:
case 1688:
case 2816:
case 3598:
case 3700:
case 1053:
case 2673:
case 2044:
case 2443:
case 2262:
case 3561:
case 1143:
case 3497:
case 3375:
case 2279:
case 3139:
case 1871:
case 1150:
case 132:
case 3961:
case 3973:
case 4033:
case 2229:
case 1708:
case 1357:
case 1016:
case 807:
case 2895:
case 3519:
case 2506:
case 2176:
case 2555:
case 1549:
case 869:
case 3421:
case 2097:
case 2908:
case 2020:
case 2893:
case 3878:
case 1124:
case 22:
case 1785:
case 1266:
case 3153:
case 1507:
case 630:
case 1392:
case 3889:
case 872:
case 230:
case 2790:
case 2197:
case 3729:
case 2351:
case 3461:
case 2238:
case 2825:
case 3930:
case 2311:
case 44:
case 2926:
case 337:
case 888:
case 2375:
case 890:
case 1173:
case 261:
case 2418:
case 390:
case 2732:
case 314:
case 881:
case 3685:
case 272:
case 2395:
case 397:
case 417:
case 3059:
case 3733:
case 3089:
case 3547:
case 2712:
case 394:
case 1798:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1650330001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,];
var gg_b = "1650330001/";

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
