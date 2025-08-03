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
case 212:
case 1732:
case 1866:
case 1993:
case 3625:
case 2111:
case 2141:
case 1702:
case 3964:
case 2438:
case 1425:
case 3895:
case 1928:
case 1967:
case 1502:
case 218:
case 924:
case 232:
case 982:
case 917:
case 1532:
case 697:
case 921:
case 1988:
case 3261:
case 2048:
case 3253:
case 2341:
case 1485:
case 2265:
case 2446:
case 3345:
case 2857:
case 3472:
case 3784:
case 2073:
case 508:
case 1889:
case 1672:
case 2681:
case 2950:
case 2030:
case 3315:
case 3051:
case 2956:
case 2410:
case 4044:
case 1392:
case 2036:
case 1527:
case 264:
case 1249:
case 3901:
case 502:
case 1219:
case 3499:
case 4014:
case 2462:
case 2621:
case 475:
case 1237:
case 1787:
case 1097:
case 1345:
case 1472:
case 3587:
case 3192:
case 4017:
case 746:
case 4009:
case 3568:
case 203:
case 3889:
case 2296:
case 1358:
case 1051:
case 2662:
case 2578:
case 1931:
case 685:
case 1063:
case 241:
case 2369:
case 3249:
case 2854:
case 3179:
case 244:
case 1901:
case 3829:
case 3219:
case 3094:
case 3237:
case 3787:
case 3732:
case 2380:
case 1625:
case 3866:
case 2638:
case 2870:
case 2803:
case 2608:
case 2513:
case 3702:
case 2186:
case 3928:
case 2326:
case 1685:
case 2713:
case 3502:
case 2320:
case 2180:
case 91:
case 2876:
case 2126:
case 510:
case 899:
case 949:
case 1261:
case 2386:
case 2743:
case 863:
case 139:
case 2349:
case 4028:
case 3748:
case 1043:
case 3718:
case 1013:
case 700:
case 2612:
case 434:
case 1476:
case 3196:
case 3555:
case 2319:
case 4093:
case 4088:
case 1470:
case 3518:
case 411:
case 3603:
case 427:
case 2923:
case 2149:
case 347:
case 3755:
case 2107:
case 1433:
case 3633:
case 2119:
case 2666:
case 3838:
case 36:
case 1403:
case 741:
case 414:
case 2137:
case 181:
case 150:
case 3706:
case 3810:
case 1821:
case 3909:
case 602:
case 3220:
case 3947:
case 489:
case 2322:
case 3840:
case 1691:
case 3736:
case 2763:
case 78:
case 153:
case 462:
case 3917:
case 877:
case 1241:
case 1454:
case 2024:
case 3536:
case 2689:
case 857:
case 1078:
case 2551:
case 608:
case 2382:
case 3457:
case 3816:
case 170:
case 3506:
case 1944:
case 2084:
case 3700:
case 381:
case 1654:
case 350:
case 1909:
case 1810:
case 442:
case 3171:
case 1500:
case 3211:
case 1220:
case 2068:
case 1736:
case 1840:
case 3241:
case 679:
case 1573:
case 1917:
case 585:
case 2429:
case 1939:
case 328:
case 373:
case 1773:
case 4001:
case 1730:
case 1457:
case 2027:
case 448:
case 3657:
case 1506:
case 370:
case 2153:
case 4031:
case 339:
case 266:
case 1269:
case 3165:
case 990:
case 840:
case 1748:
case 2134:
case 4064:
case 610:
case 3013:
case 1718:
case 2460:
case 3476:
case 843:
case 993:
case 801:
case 630:
case 1808:
case 761:
case 42:
case 3365:
case 3433:
case 2466:
case 2245:
case 1755:
case 1838:
case 2825:
case 2215:
case 16:
case 633:
case 2032:
case 1548:
case 729:
case 764:
case 346:
case 2555:
case 1375:
case 1885:
case 1460:
case 3337:
case 3612:
case 2718:
case 1134:
case 2390:
case 3292:
case 3349:
case 3307:
case 166:
case 948:
case 596:
case 2548:
case 1032:
case 1304:
case 3279:
case 26:
case 2396:
case 1825:
case 1175:
case 3149:
case 2603:
case 2190:
case 2518:
case 1002:
case 490:
case 1429:
case 2059:
case 2862:
case 3751:
case 1068:
case 665:
case 856:
case 558:
case 2220:
case 2947:
case 493:
case 2500:
case 2810:
case 2909:
case 572:
case 2706:
case 3629:
case 3597:
case 3182:
case 1794:
case 1161:
case 1489:
case 1153:
case 520:
case 552:
case 1594:
case 2816:
case 3382:
case 2773:
case 2536:
case 3689:
case 876:
case 931:
case 1899:
case 509:
case 1024:
case 1751:
case 2241:
case 2821:
case 1629:
case 1182:
case 1597:
case 222:
case 250:
case 934:
case 3794:
case 281:
case 3489:
case 3161:
case 4056:
case 1797:
case 270:
case 911:
case 2881:
case 3027:
case 2078:
case 1551:
case 786:
case 1689:
case 228:
case 1122:
case 1872:
case 2914:
case 3375:
case 989:
case 3104:
case 1337:
case 1612:
case 2013:
case 4005:
case 3442:
case 1983:
case 1642:
case 2043:
case 1292:
case 4035:
case 1307:
case 4074:
case 2403:
case 267:
case 1495:
case 3304:
case 1998:
case 3952:
case 1119:
case 3825:
case 2433:
case 219:
case 3466:
case 3245:
case 3695:
case 24:
case 2365:
case 1149:
case 3002:
case 3935:
case 3055:
case 722:
case 750:
case 3141:
case 1608:
case 781:
case 3271:
case 3408:
case 1120:
case 3905:
case 1870:
case 916:
case 2625:
case 18:
case 753:
case 387:
case 1743:
case 3341:
case 1386:
case 773:
case 1180:
case 332:
case 3311:
case 1320:
case 1713:
case 3974:
case 678:
case 2524:
case 1646:
case 3030:
case 623:
case 2315:
case 3681:
case 1296:
case 3950:
case 739:
case 43:
case 2158:
case 3000:
case 620:
case 2784:
case 652:
case 2234:
case 1616:
case 1481:
case 100:
case 719:
case 3621:
case 3440:
case 672:
case 2584:
case 2275:
case 565:
case 2724:
case 141:
case 2063:
case 1640:
case 3036:
case 1421:
case 3410:
case 807:
case 2358:
case 2379:
case 3646:
case 1030:
case 2568:
case 2672:
case 303:
case 395:
case 2587:
case 437:
case 591:
case 1857:
case 3169:
case 3481:
case 3616:
case 300:
case 2787:
case 424:
case 3610:
case 1462:
case 747:
case 2179:
case 164:
case 341:
case 2699:
case 2527:
case 129:
case 2207:
case 1036:
case 1891:
case 421:
case 482:
case 609:
case 417:
case 1956:
case 2928:
case 955:
case 3326:
case 1055:
case 2702:
case 3977:
case 871:
case 3803:
case 1141:
case 1408:
case 3543:
case 1905:
case 138:
case 3120:
case 1111:
case 3833:
case 2993:
case 3638:
case 2866:
case 2282:
case 1341:
case 2485:
case 3743:
case 3386:
case 132:
case 1018:
case 3713:
case 118:
case 3320:
case 1974:
case 2065:
case 570:
case 3609:
case 4072:
case 1439:
case 2200:
case 2520:
case 3954:
case 2929:
case 2143:
case 2273:
case 826:
case 528:
case 2113:
case 1991:
case 1447:
case 3617:
case 492:
case 3004:
case 1409:
case 2780:
case 2236:
case 1007:
case 209:
case 385:
case 584:
case 3444:
case 3132:
case 95:
case 2206:
case 2526:
case 1644:
case 3414:
case 3075:
case 1957:
case 2313:
case 1037:
case 3779:
case 2888:
case 3327:
case 2683:
case 893:
case 3168:
case 456:
case 519:
case 1745:
case 2255:
case 2867:
case 940:
case 890:
case 2912:
case 3387:
case 2178:
case 3877:
case 3903:
case 904:
case 1324:
case 3579:
case 539:
case 1805:
case 3970:
case 901:
case 1184:
case 2893:
case 2966:
case 3792:
case 2248:
case 56:
case 3715:
case 296:
case 415:
case 3558:
case 1976:
case 1592:
case 4025:
case 3384:
case 1168:
case 3745:
case 3874:
case 2159:
case 547:
case 2995:
case 435:
case 1387:
case 2498:
case 1877:
case 1127:
case 791:
case 2359:
case 3324:
case 1579:
case 4085:
case 3515:
case 3805:
case 1970:
case 1933:
case 3184:
case 1368:
case 19:
case 220:
case 977:
case 1297:
case 2511:
case 3439:
case 1639:
case 223:
case 3409:
case 1332:
case 1617:
case 2090:
case 3850:
case 1263:
case 3007:
case 1444:
case 185:
case 3644:
case 1132:
case 1075:
case 1414:
case 3294:
case 2775:
case 4091:
case 245:
case 681:
case 622:
case 2534:
case 1318:
case 2981:
case 684:
case 1790:
case 2224:
case 653:
case 3259:
case 2504:
case 796:
case 1972:
case 1596:
case 2814:
case 1999:
case 108:
case 1118:
case 1401:
case 1590:
case 2656:
case 628:
case 2704:
case 359:
case 1796:
case 3631:
case 2575:
case 1431:
case 3026:
case 3765:
case 3601:
case 291:
case 670:
case 2477:
case 1464:
case 778:
case 2753:
case 2092:
case 1243:
case 3571:
case 3852:
case 3925:
case 1336:
case 3493:
case 752:
case 2635:
case 1306:
case 2394:
case 3664:
case 999:
case 772:
case 407:
case 1667:
case 3488:
case 2194:
case 3467:
case 758:
case 1373:
case 2553:
case 3771:
case 667:
case 3464:
case 1069:
case 888:
case 586:
case 110:
case 2197:
case 2582:
case 1428:
case 1571:
case 3243:
case 2435:
case 2351:
case 3336:
case 2363:
case 2938:
case 113:
case 3823:
case 4076:
case 3173:
case 925:
case 3130:
case 2908:
case 2405:
case 821:
case 2202:
case 2163:
case 4033:
case 2522:
case 3300:
case 882:
case 40:
case 1985:
case 3667:
case 2045:
case 3688:
case 3883:
case 4003:
case 3330:
case 2474:
case 2782:
case 1771:
case 709:
case 869:
case 906:
case 1565:
case 474:
case 3318:
case 2450:
case 3011:
case 1020:
case 471:
case 1086:
case 2946:
case 3348:
case 1259:
case 3155:
case 3596:
case 179:
case 3118:
case 3999:
case 451:
case 480:
case 3278:
case 3590:
case 3401:
case 2962:
case 3796:
case 2940:
case 2507:
case 159:
case 2227:
case 3355:
case 3431:
case 2519:
case 483:
case 2809:
case 1601:
case 454:
case 2537:
case 541:
case 1707:
case 3814:
case 165:
case 3504:
case 1749:
case 1268:
case 2086:
case 2020:
case 3534:
case 425:
case 3844:
case 3775:
case 1719:
case 3284:
case 391:
case 1537:
case 2601:
case 1456:
case 1910:
case 90:
case 1227:
case 1507:
case 1962:
case 3704:
case 1817:
case 595:
case 394:
case 1839:
case 503:
case 3394:
case 1677:
case 1908:
case 3635:
case 2493:
case 213:
case 406:
case 855:
case 666:
case 2571:
case 2428:
case 3092:
case 1582:
case 1197:
case 210:
case 3605:
case 233:
case 875:
case 1782:
case 3079:
case 3194:
case 951:
case 2488:
case 2985:
case 1151:
case 1163:
case 983:
case 3405:
case 3908:
case 2130:
case 4060:
case 646:
case 1635:
case 3363:
case 2693:
case 2100:
case 5:
case 2898:
case 2243:
case 1092:
case 3351:
case 3197:
case 4012:
case 1605:
case 1477:
case 785:
case 1561:
case 538:
case 1553:
case 2330:
case 1079:
case 512:
case 3474:
case 3232:
case 3782:
case 2688:
case 2883:
case 1194:
case 1674:
case 3522:
case 2596:
case 2972:
case 3707:
case 529:
case 564:
case 365:
case 2790:
case 2348:
case 1650:
case 3268:
case 2318:
case 1534:
case 3916:
case 145:
case 1844:
case 561:
case 1775:
case 191:
case 2148:
case 1921:
case 3809:
case 2355:
case 2431:
case 3847:
case 4089:
case 3519:
case 1656:
case 2401:
case 2332:
case 2004:
case 3780:
case 3230:
case 1831:
case 1096:
case 695:
case 123:
case 2639:
case 4016:
case 1541:
case 4046:
case 3143:
case 3929:
case 600:
case 2302:
case 2034:
case 1511:
case 463:
case 2647:
case 2297:
case 3065:
case 2609:
case 120:
case 3313:
case 4040:
case 3206:
case 3580:
case 2444:
case 3989:
case 158:
case 2263:
case 2102:
case 3786:
case 811:
case 641:
case 2251:
case 1159:
case 3912:
case 477:
case 862:
case 2187:
case 3378:
case 889:
case 196:
case 68:
case 3942:
case 2327:
case 2779:
case 1423:
case 2053:
case 3248:
case 3893:
case 566:
case 868:
case 2579:
case 2903:
case 1864:
case 2127:
case 3452:
case 1498:
case 3218:
case 0:
case 3623:
case 2387:
case 3828:
case 3178:
case 1912:
case 2874:
case 2124:
case 1867:
case 2745:
case 47:
case 779:
case 1378:
case 1071:
case 2558:
case 687:
case 1942:
case 1683:
case 2082:
case 2715:
case 759:
case 3423:
case 2758:
case 1698:
case 2184:
case 2515:
case 618:
case 848:
case 1218:
case 2835:
case 45:
case 1828:
case 1623:
case 2856:
case 1780:
case 2409:
case 1230:
case 2447:
case 443:
case 3831:
case 2991:
case 710:
case 323:
case 1143:
case 1929:
case 3801:
case 3511:
case 2439:
case 713:
case 1726:
case 2417:
case 352:
case 2037:
case 404:
case 661:
case 1720:
case 2019:
case 1206:
case 1580:
case 1989:
case 664:
case 1786:
case 2850:
case 401:
case 82:
case 629:
case 3090:
case 3424:
case 1029:
case 2459:
case 1468:
case 3687:
case 2710:
case 1487:
case 445:
case 3851:
case 3863:
case 2091:
case 2836:
case 3996:
case 2740:
case 3572:
case 2546:
case 325:
case 524:
case 2562:
case 2873:
case 3484:
case 2907:
case 3772:
case 735:
case 588:
case 199:
case 1089:
case 3627:
case 2830:
case 2746:
case 494:
case 3897:
case 1684:
case 2198:
case 2510:
case 3109:
case 1525:
case 2538:
case 3147:
case 2293:
case 1042:
case 2848:
case 2508:
case 1235:
case 1785:
case 1012:
case 2228:
case 2613:
case 3139:
case 2818:
case 3277:
case 3117:
case 2708:
case 4079:
case 908:
case 1114:
case 2855:
case 2922:
case 1432:
case 1274:
case 2267:
case 3095:
case 3309:
case 3632:
case 3317:
case 2288:
case 1402:
case 1109:
case 3971:
case 2076:
case 3205:
case 3314:
case 2413:
case 3042:
case 626:
case 3060:
case 2443:
case 3012:
case 3785:
case 2264:
case 979:
case 792:
case 3344:
case 1117:
case 2003:
case 1602:
case 959:
case 1309:
case 1095:
case 3274:
case 3432:
case 3144:
case 20:
case 1632:
case 1317:
case 2961:
case 3725:
case 1339:
case 2070:
case 798:
case 910:
case 2934:
case 549:
case 271:
case 2721:
case 465:
case 693:
case 756:
case 3487:
case 1996:
case 1668:
case 605:
case 3250:
case 913:
case 2581:
case 1799:
case 125:
case 776:
case 283:
case 1484:
case 2781:
case 254:
case 53:
case 280:
case 3427:
case 251:
case 2975:
case 3684:
case 933:
case 2478:
case 2201:
case 2911:
case 3016:
case 2105:
case 1554:
case 1367:
case 360:
case 292:
case 143:
case 2884:
case 363:
case 637:
case 2072:
case 3591:
case 1878:
case 1128:
case 688:
case 2941:
case 1081:
case 1393:
case 3040:
case 86:
case 2214:
case 2099:
case 298:
case 2694:
case 3557:
case 1188:
case 101:
case 2244:
case 621:
case 3010:
case 2335:
case 997:
case 1328:
case 2463:
case 1733:
case 3331:
case 256:
case 3455:
case 17:
case 2356:
case 3958:
case 3301:
case 771:
case 2795:
case 1655:
case 780:
case 1813:
case 751:
case 2156:
case 1533:
case 357:
case 15:
case 783:
case 3915:
case 1979:
case 2350:
case 754:
case 3252:
case 1455:
case 853:
case 1038:
case 2766:
case 3283:
case 2832:
case 1958:
case 3576:
case 37:
case 177:
case 884:
case 2802:
case 822:
case 2512:
case 850:
case 1301:
case 3813:
case 1945:
case 2085:
case 3223:
case 1448:
case 2712:
case 1131:
case 828:
case 35:
case 3843:
case 1418:
case 2742:
case 1252:
case 3298:
case 2247:
case 1757:
case 1016:
case 2920:
case 3367:
case 160:
case 1430:
case 2697:
case 1473:
case 1591:
case 1400:
case 2239:
case 3128:
case 452:
case 3878:
case 420:
case 3673:
case 340:
case 2217:
case 3388:
case 3081:
case 2663:
case 1791:
case 1040:
case 707:
case 867:
case 2651:
case 2980:
case 1406:
case 505:
case 304:
case 593:
case 458:
case 301:
case 1557:
case 3188:
case 2377:
case 4090:
case 3754:
case 3606:
case 84:
case 99:
case 2887:
case 649:
case 3021:
case 590:
case 1436:
case 61:
case 4034:
case 1177:
case 1827:
case 3497:
case 1217:
case 1789:
case 2591:
case 3072:
case 996:
case 548:
case 2473:
case 392:
case 1697:
case 260:
case 1209:
case 2016:
case 3105:
case 3451:
case 2010:
case 1926:
case 3335:
case 1887:
case 485:
case 1729:
case 2364:
case 2557:
case 1494:
case 3214:
case 3099:
case 398:
case 3174:
case 3824:
case 1980:
case 1651:
case 636:
case 1589:
case 1868:
case 1663:
case 1512:
case 2008:
case 923:
case 1802:
case 1969:
case 1542:
case 1560:
case 277:
case 952:
case 3356:
case 1766:
case 2038:
case 2331:
case 2455:
case 2418:
case 1742:
case 1760:
case 257:
case 1566:
case 376:
case 4061:
case 2131:
case 3595:
case 3156:
case 1712:
case 1085:
case 958:
case 2945:
case 2655:
case 1795:
case 4082:
case 3512:
case 725:
case 3969:
case 2576:
case 1356:
case 3025:
case 156:
case 511:
case 2733:
case 2570:
case 2298:
case 1350:
case 2979:
case 2648:
case 3760:
case 335:
case 534:
case 176:
case 909:
case 1595:
case 1156:
case 497:
case 3085:
case 2618:
case 3827:
case 3177:
case 2081:
case 240:
case 1941:
case 3217:
case 706:
case 1072:
case 866:
case 3239:
case 3789:
case 2600:
case 243:
case 2554:
case 3209:
case 3529:
case 3697:
case 1105:
case 1911:
case 3920:
case 4007:
case 1463:
case 3887:
case 1335:
case 1451:
case 3926:
case 2021:
case 1244:
case 2754:
case 3729:
case 562:
case 201:
case 2188:
case 3377:
case 1694:
case 1099:
case 198:
case 1214:
case 1174:
case 204:
case 3651:
case 3980:
case 3663:
case 3868:
case 2636:
case 3589:
case 174:
case 1659:
case 2799:
case 1581:
case 4020:
case 2668:
case 3740:
case 1352:
case 3398:
case 77:
case 1904:
case 887:
case 3762:
case 2851:
case 479:
case 3516:
case 1934:
case 1054:
case 2424:
case 3459:
case 3806:
case 832:
case 1478:
case 4080:
case 1975:
case 1152:
case 3919:
case 459:
case 151:
case 3057:
case 648:
case 154:
case 3383:
case 2627:
case 1231:
case 8:
case 1781:
case 3540:
case 183:
case 3123:
case 3562:
case 3678:
case 4026:
case 743:
case 965:
case 2139:
case 3613:
case 3228:
case 1443:
case 206:
case 413:
case 1076:
case 1070:
case 2339:
case 829:
case 704:
case 3288:
case 1033:
case 1953:
case 2317:
case 2632:
case 307:
case 2309:
case 3855:
case 433:
case 2347:
case 2602:
case 701:
case 1818:
case 760:
case 2235:
case 631:
case 2060:
case 1643:
case 3413:
case 2042:
case 1293:
case 1538:
case 2314:
case 803:
case 2525:
case 895:
case 611:
case 841:
case 991:
case 2402:
case 1288:
case 107:
case 30:
case 2274:
case 1855:
case 614:
case 844:
case 575:
case 2624:
case 4011:
case 777:
case 1398:
case 1836:
case 1091:
case 2250:
case 3904:
case 88:
case 1323:
case 662:
case 2894:
case 3934:
case 371:
case 1183:
case 1459:
case 2029:
case 3054:
case 3521:
case 1510:
case 3478:
case 3201:
case 1198:
case 3975:
case 1800:
case 2684:
case 1057:
case 2427:
case 408:
case 1937:
case 555:
case 2256:
case 668:
case 3781:
case 1383:
case 383:
case 299:
case 1562:
case 1949:
case 55:
case 981:
case 326:
case 1005:
case 3861:
case 446:
case 3658:
case 1260:
case 3853:
case 2321:
case 1035:
case 1458:
case 1822:
case 1172:
case 1955:
case 953:
case 2181:
case 2469:
case 231:
case 984:
case 928:
case 1918:
case 214:
case 2067:
case 3479:
case 3295:
case 1948:
case 970:
case 3615:
case 227:
case 1679:
case 1445:
case 2552:
case 1372:
case 2121:
case 885:
case 736:
case 2871:
case 1819:
case 3875:
case 1900:
case 3125:
case 2611:
case 1837:
case 3385:
case 1930:
case 2420:
case 2291:
case 1539:
case 393:
case 4084:
case 1936:
case 2426:
case 89:
case 2480:
case 1709:
case 967:
case 1747:
case 3834:
case 543:
case 1906:
case 1875:
case 3900:
case 1385:
case 3837:
case 3930:
case 3050:
case 625:
case 1714:
case 3517:
case 1185:
case 563:
case 1325:
case 2963:
case 2031:
case 2896:
case 3936:
case 1804:
case 897:
case 947:
case 2951:
case 3056:
case 2680:
case 96:
case 3709:
case 560:
case 1544:
case 3747:
case 4027:
case 2308:
case 557:
case 2583:
case 3005:
case 2116:
case 755:
case 2340:
case 2798:
case 3242:
case 3260:
case 1853:
case 3692:
case 3212:
case 466:
case 3955:
case 2203:
case 2162:
case 2140:
case 3199:
case 3918:
case 2316:
case 3415:
case 3074:
case 2346:
case 22:
case 1615:
case 2233:
case 3266:
case 3445:
case 4002:
case 3372:
case 2270:
case 2110:
case 1083:
case 3238:
case 3154:
case 742:
case 67:
case 2389:
case 3593:
case 1191:
case 412:
case 487:
case 438:
case 2189:
case 2461:
case 2622:
case 1023:
case 3354:
case 3567:
case 4048:
case 1764:
case 3902:
case 418:
case 3588:
case 1157:
case 4018:
case 3869:
case 859:
case 3793:
case 1496:
case 813:
case 3176:
case 1665:
case 643:
case 4030:
case 2160:
case 1701:
case 3370:
case 2112:
case 255:
case 3465:
case 3968:
case 1731:
case 72:
case 3927:
case 3886:
case 3103:
case 3262:
case 2360:
case 4006:
case 275:
case 124:
case 2978:
case 2014:
case 2299:
case 4036:
case 1984:
case 2166:
case 2619:
case 121:
case 182:
case 31:
case 117:
case 2044:
case 1221:
case 2637:
case 830:
case 429:
case 1811:
case 3820:
case 403:
case 2047:
case 1216:
case 216:
case 1826:
case 2395:
case 2009:
case 495:
case 3701:
case 2550:
case 2039:
case 388:
case 2959:
case 400:
case 3924:
case 337:
case 663:
case 1246:
case 13:
case 2604:
case 1968:
case 3281:
case 3731:
case 1696:
case 2750:
case 1240:
case 1886:
case 727:
case 2437:
case 711:
case 1262:
case 2195:
case 2556:
case 525:
case 1376:
case 3531:
case 986:
case 321:
case 2675:
case 149:
case 2407:
case 3984:
case 317:
case 382:
case 2449:
case 3501:
case 3490:
case 3221:
case 714:
case 441:
case 2225:
case 1238:
case 1788:
case 1154:
case 762:
case 1208:
case 802:
case 48:
case 2535:
case 1528:
case 1471:
case 2482:
case 1767:
case 2845:
case 2285:
case 3023:
case 2574:
case 1354:
case 1567:
case 3764:
case 1869:
case 506:
case 808:
case 3157:
case 2705:
case 1932:
case 1052:
case 3098:
case 3391:
case 3577:
case 1845:
case 2767:
case 2471:
case 2528:
case 615:
case 903:
case 2593:
case 3389:
case 3879:
case 3943:
case 3129:
case 900:
case 1422:
case 1661:
case 1653:
case 2932:
case 3892:
case 1858:
case 894:
case 1705:
case 2869:
case 3777:
case 891:
case 1574:
case 2728:
case 1735:
case 486:
case 3189:
case 2968:
case 3366:
case 554:
case 355:
case 1604:
case 1017:
case 23:
case 2880:
case 1959:
case 1039:
case 583:
case 2303:
case 3160:
case 98:
case 2176:
case 3404:
case 1009:
case 116:
case 551:
case 1047:
case 2170:
case 2820:
case 2210:
case 3637:
case 1449:
case 3044:
case 4063:
case 1407:
case 3166:
case 249:
case 2133:
case 3619:
case 136:
case 3475:
case 3299:
case 574:
case 2376:
case 1195:
case 2103:
case 1437:
case 3360:
case 3342:
case 2886:
case 1366:
case 2731:
case 237:
case 3756:
case 155:
case 3959:
case 1112:
case 726:
case 2924:
case 1434:
case 1272:
case 3039:
case 938:
case 3634:
case 1160:
case 2665:
case 987:
case 692:
case 316:
case 9:
case 2811:
case 2501:
case 1637:
case 2221:
case 282:
case 1166:
case 3675:
case 2984:
case 3407:
case 269:
case 1475:
case 1014:
case 1607:
case 3195:
case 932:
case 1978:
case 224:
case 175:
case 3437:
case 2841:
case 1342:
case 1577:
case 2564:
case 1913:
case 3774:
case 2671:
case 656:
case 1682:
case 1129:
case 2083:
case 3505:
case 3422:
case 3858:
case 3653:
case 676:
case 2157:
case 929:
case 1777:
case 2764:
case 1329:
case 2023:
case 1622:
case 1189:
case 1146:
case 3469:
case 3181:
case 1064:
case 331:
case 3321:
case 1723:
case 3028:
case 1362:
case 2658:
case 2853:
case 3093:
case 1798:
case 737:
case 3752:
case 226:
case 1116:
case 1583:
case 535:
case 788:
case 1110:
case 3121:
case 769:
case 447:
case 3871:
case 3552:
case 1598:
case 724:
case 311:
case 1783:
case 2615:
case 12:
case 327:
case 3067:
case 717:
case 1140:
case 1162:
case 721:
case 1523:
case 142:
case 205:
case 293:
case 2714:
case 674:
case 1108:
case 3641:
case 1890:
case 4059:
case 1997:
case 290:
case 671:
case 3486:
case 966:
case 2125:
case 1254:
case 362:
case 1001:
case 651:
case 1308:
case 2834:
case 148:
case 680:
case 3257:
case 1626:
case 3865:
case 1680:
case 1951:
case 1338:
case 1896:
case 1963:
case 2325:
case 368:
case 2517:
case 2973:
case 2807:
case 598:
case 189:
case 3686:
case 1291:
case 2050:
case 1420:
case 3108:
case 3890:
case 2930:
case 450:
case 2837:
case 1611:
case 1486:
case 2900:
case 3138:
case 453:
case 162:
case 2509:
case 348:
case 1994:
case 428:
case 2747:
case 3626:
case 3680:
case 3338:
case 168:
case 470:
case 3146:
case 4043:
case 131:
case 3064:
case 1181:
case 2955:
case 2172:
case 2822:
case 820:
case 2458:
case 2212:
case 3723:
case 2035:
case 3310:
case 2260:
case 2692:
case 3340:
case 3798:
case 1752:
case 73:
case 1093:
case 3583:
case 4013:
case 3116:
case 878:
case 576:
case 3276:
case 134:
case 1871:
case 1121:
case 2372:
case 1552:
case 3270:
case 419:
case 607:
case 1088:
case 2266:
case 2679:
case 3346:
case 2948:
case 114:
case 71:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754240402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,];
var gg_b = "1754236801/";

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
