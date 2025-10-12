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
var o = 0;
switch (g) {
case 1006:
case 1076:
case 2598:
case 2934:
case 1339:
case 2055:
case 125:
case 41:
case 907:
case 900:
case 2554:
case 3881:
case 19:
case 426:
case 2937:
case 2274:
case 1826:
case 4026:
case 150:
case 133:
case 1259:
case 688:
case 2390:
case 534:
case 3687:
case 2865:
case 157:
case 2601:
case 2525:
case 394:
case 3963:
case 3153:
case 2151:
case 3323:
case 481:
case 2671:
case 956:
case 96:
case 2024:
case 1069:
case 2807:
case 1736:
case 3596:
case 3753:
case 2265:
case 106:
case 628:
case 922:
case 3099:
case 3913:
case 2027:
case 951:
case 3281:
case 3949:
case 973:
case 2804:
case 1280:
case 986:
case 844:
case 594:
case 2825:
case 193:
case 2254:
case 1279:
case 2507:
case 509:
case 155:
case 443:
case 2577:
case 1988:
case 2298:
case 3784:
case 3187:
case 2242:
case 3487:
case 413:
case 2005:
case 1816:
case 2334:
case 4016:
case 814:
case 2574:
case 2701:
case 3773:
case 829:
case 2898:
case 1266:
case 2311:
case 2515:
case 482:
case 94:
case 3703:
case 2014:
case 2225:
case 97:
case 2854:
case 1880:
case 2192:
case 3473:
case 3173:
case 2148:
case 2064:
case 1526:
case 3653:
case 407:
case 2171:
case 3385:
case 2017:
case 2361:
case 2565:
case 91:
case 187:
case 3923:
case 2857:
case 3296:
case 952:
case 2842:
case 963:
case 271:
case 9:
case 3928:
case 1724:
case 3694:
case 1861:
case 2769:
case 1357:
case 1977:
case 2588:
case 4061:
case 2143:
case 2119:
case 3108:
case 241:
case 211:
case 1727:
case 1124:
case 2380:
case 3697:
case 3441:
case 4011:
case 246:
case 3130:
case 674:
case 689:
case 1237:
case 644:
case 1664:
case 2629:
case 3741:
case 3891:
case 3708:
case 2539:
case 3820:
case 1834:
case 3995:
case 1261:
case 4034:
case 2316:
case 2706:
case 3038:
case 3202:
case 2776:
case 3045:
case 1755:
case 2682:
case 28:
case 1211:
case 3070:
case 2366:
case 3552:
case 2926:
case 3000:
case 1521:
case 1325:
case 1631:
case 2176:
case 1965:
case 3918:
case 1117:
case 1714:
case 272:
case 1534:
case 2288:
case 3844:
case 3794:
case 2979:
case 3630:
case 508:
case 1001:
case 223:
case 1035:
case 1954:
case 1767:
case 1048:
case 1290:
case 2980:
case 2129:
case 1414:
case 3210:
case 1717:
case 212:
case 2429:
case 4021:
case 1307:
case 709:
case 1537:
case 2239:
case 3852:
case 1377:
case 3886:
case 1764:
case 1957:
case 2643:
case 3328:
case 1942:
case 3641:
case 2619:
case 1417:
case 1740:
case 3572:
case 1890:
case 3050:
case 2182:
case 3810:
case 1561:
case 1925:
case 3332:
case 2326:
case 1105:
case 1131:
case 1383:
case 1175:
case 2676:
case 4090:
case 2888:
case 2456:
case 2782:
case 1475:
case 1431:
case 3286:
case 3252:
case 1315:
case 1511:
case 1775:
case 2593:
case 3247:
case 2999:
case 3107:
case 3704:
case 685:
case 3314:
case 1941:
case 2587:
case 1978:
case 3177:
case 782:
case 1358:
case 3474:
case 3367:
case 2049:
case 3011:
case 3851:
case 2853:
case 1128:
case 3404:
case 1200:
case 3927:
case 2013:
case 700:
case 1072:
case 1428:
case 1397:
case 3104:
case 3061:
case 3654:
case 2063:
case 1245:
case 1238:
case 3174:
case 707:
case 606:
case 1930:
case 299:
case 2085:
case 3698:
case 3407:
case 1618:
case 3924:
case 1728:
case 2253:
case 773:
case 1800:
case 3340:
case 3037:
case 3592:
case 1732:
case 3251:
case 3783:
case 1195:
case 4070:
case 1432:
case 1222:
case 625:
case 3165:
case 633:
case 4045:
case 3415:
case 4038:
case 1495:
case 3305:
case 3501:
case 3535:
case 3331:
case 756:
case 3625:
case 2181:
case 2503:
case 1812:
case 239:
case 1570:
case 3742:
case 602:
case 1052:
case 1500:
case 1768:
case 3021:
case 3457:
case 2287:
case 1997:
case 2023:
case 1118:
case 3917:
case 1418:
case 3607:
case 687:
case 3498:
case 3142:
case 1168:
case 680:
case 3157:
case 3967:
case 3754:
case 4062:
case 158:
case 1862:
case 1250:
case 1994:
case 2284:
case 786:
case 3848:
case 752:
case 763:
case 2933:
case 71:
case 3931:
case 1522:
case 2796:
case 3125:
case 721:
case 3355:
case 1060:
case 3292:
case 693:
case 2681:
case 2273:
case 3235:
case 3271:
case 3090:
case 620:
case 3725:
case 3615:
case 4050:
case 74:
case 3026:
case 34:
case 2970:
case 3529:
case 500:
case 3243:
case 2350:
case 2278:
case 2208:
case 2120:
case 880:
case 3219:
case 298:
case 129:
case 2420:
case 2558:
case 1346:
case 2230:
case 3269:
case 802:
case 363:
case 934:
case 2594:
case 2938:
case 31:
case 2610:
case 1387:
case 2808:
case 1899:
case 556:
case 1303:
case 827:
case 1533:
case 2878:
case 1713:
case 1413:
case 3493:
case 2647:
case 2491:
case 1953:
case 1163:
case 1149:
case 409:
case 2191:
case 144:
case 1463:
case 3193:
case 893:
case 543:
case 2472:
case 2028:
case 494:
case 3869:
case 3206:
case 2830:
case 2312:
case 174:
case 855:
case 305:
case 381:
case 83:
case 2702:
case 1096:
case 2578:
case 1987:
case 3856:
case 1833:
case 3519:
case 2541:
case 586:
case 2508:
case 2338:
case 1599:
case 3439:
case 2110:
case 238:
case 36:
case 909:
case 3788:
case 2410:
case 343:
case 2950:
case 3066:
case 2258:
case 373:
case 159:
case 885:
case 3569:
case 3488:
case 2300:
case 581:
case 2912:
case 3829:
case 89:
case 2786:
case 2452:
case 3693:
case 1723:
case 1613:
case 526:
case 850:
case 833:
case 2897:
case 2144:
case 2747:
case 3256:
case 1353:
case 3506:
case 2444:
case 3576:
case 1123:
case 1903:
case 2962:
case 2744:
case 51:
case 382:
case 661:
case 1486:
case 3042:
case 2423:
case 3231:
case 1897:
case 1747:
case 1144:
case 3992:
case 623:
case 1447:
case 1691:
case 2649:
case 3611:
case 1912:
case 2613:
case 791:
case 948:
case 1962:
case 4058:
case 2903:
case 65:
case 2973:
case 3901:
case 3935:
case 2663:
case 1744:
case 1322:
case 3948:
case 697:
case 2353:
case 3121:
case 4094:
case 666:
case 2123:
case 1018:
case 3867:
case 2685:
case 3637:
case 2946:
case 3527:
case 683:
case 3190:
case 1110:
case 138:
case 3875:
case 3217:
case 1578:
case 1297:
case 1338:
case 1760:
case 2599:
case 3831:
case 259:
case 3524:
case 1370:
case 1258:
case 1530:
case 1300:
case 3025:
case 1410:
case 3214:
case 1950:
case 1160:
case 1652:
case 662:
case 4078:
case 671:
case 3161:
case 2413:
case 710:
case 653:
case 1172:
case 3004:
case 4041:
case 637:
case 1102:
case 1491:
case 2373:
case 3505:
case 3531:
case 616:
case 736:
case 2899:
case 3621:
case 1878:
case 1362:
case 792:
case 2713:
case 3575:
case 731:
case 2485:
case 1772:
case 770:
case 3824:
case 1702:
case 3392:
case 289:
case 274:
case 3255:
case 2763:
case 1191:
case 244:
case 1402:
case 676:
case 2149:
case 3111:
case 1472:
case 1028:
case 4030:
case 62:
case 1350:
case 3737:
case 703:
case 1989:
case 1208:
case 2384:
case 3564:
case 1900:
case 3083:
case 1660:
case 3437:
case 418:
case 448:
case 1938:
case 3137:
case 3514:
case 1945:
case 1558:
case 229:
case 3855:
case 198:
case 1095:
case 1230:
case 1553:
case 3716:
case 3626:
case 3306:
case 3536:
case 949:
case 3376:
case 1681:
case 532:
case 560:
case 3956:
case 984:
case 979:
case 567:
case 3416:
case 2632:
case 515:
case 846:
case 545:
case 3088:
case 2695:
case 454:
case 841:
case 4084:
case 1273:
case 862:
case 1884:
case 2850:
case 837:
case 3179:
case 924:
case 2589:
case 347:
case 340:
case 2118:
case 2086:
case 2997:
case 331:
case 139:
case 377:
case 2500:
case 2768:
case 2330:
case 2047:
case 3779:
case 469:
case 1873:
case 392:
case 2718:
case 2628:
case 1284:
case 3709:
case 1399:
case 3780:
case 2418:
case 317:
case 4003:
case 3479:
case 2958:
case 897:
case 547:
case 540:
case 2222:
case 2800:
case 1253:
case 577:
case 2512:
case 969:
case 835:
case 85:
case 30:
case 2732:
case 3126:
case 2795:
case 1573:
case 823:
case 1503:
case 1333:
case 842:
case 592:
case 3382:
case 3976:
case 3666:
case 288:
case 861:
case 2495:
case 3906:
case 2020:
case 2358:
case 1049:
case 3759:
case 2200:
case 2128:
case 1013:
case 3093:
case 1853:
case 3919:
case 332:
case 2941:
case 1999:
case 360:
case 367:
case 2978:
case 3943:
case 345:
case 484:
case 3159:
case 3969:
case 2728:
case 3329:
case 391:
case 228:
case 199:
case 1085:
case 2072:
case 2428:
case 2550:
case 1584:
case 104:
case 2131:
case 2440:
case 1966:
case 2175:
case 3381:
case 3133:
case 3585:
case 549:
case 579:
case 584:
case 4088:
case 2561:
case 996:
case 915:
case 1182:
case 2740:
case 932:
case 2925:
case 960:
case 183:
case 748:
case 1839:
case 2511:
case 3549:
case 1756:
case 1482:
case 945:
case 3513:
case 3733:
case 1593:
case 2775:
case 519:
case 2221:
case 2475:
case 975:
case 2140:
case 1456:
case 2954:
case 2767:
case 410:
case 1359:
case 2035:
case 123:
case 3003:
case 465:
case 142:
case 524:
case 2290:
case 417:
case 436:
case 1288:
case 2304:
case 2714:
case 2467:
case 1643:
case 470:
case 431:
case 3823:
case 3699:
case 190:
case 2942:
case 1619:
case 1429:
case 447:
case 2717:
case 112:
case 1239:
case 440:
case 2377:
case 1706:
case 3396:
case 940:
case 2261:
case 1316:
case 324:
case 3263:
case 1776:
case 569:
case 1476:
case 2455:
case 931:
case 970:
case 2834:
case 992:
case 2521:
case 2325:
case 2965:
case 40:
case 1656:
case 1176:
case 2675:
case 2211:
case 18:
case 3981:
case 839:
case 768:
case 2983:
case 3213:
case 195:
case 2667:
case 2977:
case 1469:
case 2424:
case 3199:
case 1119:
case 349:
case 384:
case 379:
case 171:
case 445:
case 2342:
case 2127:
case 2724:
case 2614:
case 1769:
case 554:
case 137:
case 460:
case 1893:
case 1743:
case 3053:
case 2664:
case 2237:
case 2974:
case 1036:
case 1379:
case 3813:
case 432:
case 2904:
case 2398:
case 1539:
case 3849:
case 3799:
case 415:
case 12:
case 467:
case 1419:
case 1380:
case 1959:
case 2354:
case 3094:
case 3462:
case 1854:
case 719:
case 1471:
case 1192:
case 1448:
case 1748:
case 2266:
case 1898:
case 1067:
case 1735:
case 898:
case 1701:
case 3391:
case 3595:
case 1771:
case 2393:
case 4054:
case 2879:
case 784:
case 3372:
case 779:
case 3097:
case 3986:
case 287:
case 1565:
case 3622:
case 518:
case 280:
case 1921:
case 3302:
case 1064:
case 1492:
case 3947:
case 1148:
case 1583:
case 1135:
case 3412:
case 2636:
case 4042:
case 1171:
case 4057:
case 3162:
case 3952:
case 749:
case 2029:
case 1651:
case 4025:
case 1507:
case 1337:
case 1040:
case 2209:
case 1298:
case 2866:
case 2988:
case 255:
case 1990:
case 3528:
case 3645:
case 3638:
case 3670:
case 2939:
case 1504:
case 2082:
case 1574:
case 1242:
case 2559:
case 3268:
case 1257:
case 227:
case 1075:
case 1215:
case 3352:
case 1024:
case 1807:
case 568:
case 1525:
case 4007:
case 1648:
case 3828:
case 3902:
case 1635:
case 1961:
case 1151:
case 1283:
case 1874:
case 2226:
case 1027:
case 1804:
case 604:
case 1692:
case 1265:
case 4004:
case 3078:
case 2736:
case 3232:
case 3008:
case 1751:
case 4074:
case 2580:
case 3445:
case 4015:
case 1554:
case 3189:
case 2579:
case 225:
case 3518:
case 1934:
case 1277:
case 2259:
case 3832:
case 1542:
case 233:
case 3310:
case 257:
case 1865:
case 3700:
case 1557:
case 2388:
case 29:
case 4065:
case 3145:
case 3470:
case 2826:
case 1937:
case 2698:
case 3085:
case 1329:
case 430:
case 1159:
case 2477:
case 854:
case 441:
case 2777:
case 2174:
case 2104:
case 495:
case 416:
case 2317:
case 1093:
case 3013:
case 446:
case 3546:
case 2474:
case 411:
case 3587:
case 1459:
case 2704:
case 3999:
case 997:
case 1356:
case 966:
case 3181:
case 3333:
case 2183:
case 2305:
case 3573:
case 990:
case 1126:
case 1906:
case 618:
case 912:
case 1666:
case 1976:
case 2034:
case 869:
case 923:
case 3781:
case 3696:
case 942:
case 2115:
case 1726:
case 648:
case 1616:
case 2592:
case 1426:
case 961:
case 10:
case 972:
case 2251:
case 2765:
case 3481:
case 2340:
case 1709:
case 3399:
case 1480:
case 2914:
case 3873:
case 1343:
case 2871:
case 136:
case 472:
case 461:
case 2454:
case 1479:
case 442:
case 2327:
case 2498:
case 1409:
case 1109:
case 435:
case 3287:
case 2198:
case 3023:
case 1659:
case 2964:
case 1369:
case 466:
case 170:
case 2604:
case 2324:
case 2742:
case 131:
case 497:
case 849:
case 976:
case 1466:
case 1088:
case 1116:
case 2615:
case 2725:
case 911:
case 2425:
case 1766:
case 946:
case 2235:
case 884:
case 879:
case 3273:
case 103:
case 2551:
case 1039:
case 3681:
case 1376:
case 3846:
case 1306:
case 3796:
case 1536:
case 941:
case 2125:
case 3553:
case 2905:
case 668:
case 3887:
case 1956:
case 1166:
case 2665:
case 2975:
case 3933:
case 1137:
case 1734:
case 2688:
case 1855:
case 398:
case 221:
case 1015:
case 3558:
case 1567:
case 3032:
case 3241:
case 2243:
case 3350:
case 1134:
case 2529:
case 3970:
case 624:
case 1437:
case 1564:
case 2026:
case 1227:
case 1255:
case 3644:
case 3702:
case 1824:
case 1392:
case 1077:
case 281:
case 3830:
case 619:
case 3772:
case 1540:
case 2869:
case 1761:
case 3472:
case 3402:
case 3491:
case 3647:
case 538:
case 1074:
case 2936:
case 1827:
case 1411:
case 684:
case 3652:
case 286:
case 1371:
case 2843:
case 1621:
case 3922:
case 1348:
case 3808:
case 3791:
case 2819:
case 3620:
case 3710:
case 3530:
case 2488:
case 1840:
case 2066:
case 3370:
case 3258:
case 2139:
case 3294:
case 2788:
case 222:
case 2882:
case 654:
case 213:
case 3541:
case 3345:
case 1805:
case 2519:
case 2739:
case 3338:
case 3760:
case 2856:
case 3297:
case 2188:
case 2016:
case 1875:
case 2543:
case 3147:
case 3894:
case 3322:
case 1901:
case 282:
case 878:
case 1971:
case 3672:
case 4067:
case 2080:
case 2009:
case 3858:
case 1867:
case 3018:
case 1555:
case 2336:
case 2506:
case 3444:
case 704:
case 2256:
case 3144:
case 3747:
case 207:
case 1275:
case 818:
case 200:
case 1231:
case 4064:
case 3486:
case 1042:
case 1864:
case 3786:
case 3912:
case 1721:
case 4017:
case 3390:
case 1489:
case 3865:
case 1832:
case 3542:
case 1138:
case 3274:
case 4032:
case 2646:
case 1145:
case 1400:
case 3204:
case 3554:
case 1100:
case 60:
case 1650:
case 498:
case 3815:
case 3055:
case 1745:
case 1189:
case 2281:
case 1991:
case 3692:
case 3804:
case 3911:
case 3283:
case 1008:
case 2596:
case 1422:
case 2753:
case 3265:
case 667:
case 75:
case 1347:
case 615:
case 696:
case 3807:
case 1030:
case 632:
case 938:
case 3215:
case 209:
case 1295:
case 660:
case 2323:
case 3671:
case 1386:
case 3635:
case 797:
case 3648:
case 3525:
case 3321:
case 1320:
case 3574:
case 2787:
case 3334:
case 2033:
case 3005:
case 1218:
case 2187:
case 2784:
case 3577:
case 3507:
case 3337:
case 3040:
case 78:
case 1645:
case 3254:
case 2146:
case 3990:
case 1532:
case 1302:
case 2363:
case 234:
case 1622:
case 1712:
case 3361:
case 771:
case 3651:
case 692:
case 741:
case 2385:
case 3171:
case 1412:
case 2653:
case 636:
case 3148:
case 716:
case 795:
case 4018:
case 746:
case 677:
case 2473:
case 3401:
case 1112:
case 2403:
case 3225:
case 3014:
case 631:
case 711:
case 2313:
case 3771:
case 1595:
case 3311:
case 647:
case 3748:
case 1058:
case 776:
case 3629:
case 2741:
case 2891:
case 3539:
case 3379:
case 3036:
case 376:
case 3743:
case 3443:
case 2130:
case 2478:
case 2022:
case 3959:
case 3380:
case 1499:
case 2441:
case 4049:
case 119:
case 2697:
case 2141:
case 404:
case 1199:
case 341:
case 4063:
case 2220:
case 3588:
case 3143:
case 316:
case 337:
case 583:
case 2730:
case 2872:
case 2368:
case 3769:
case 499:
case 330:
case 1863:
case 2694:
case 1633:
case 590:
case 3656:
case 597:
case 847:
case 2932:
case 2000:
case 1213:
case 3293:
case 2291:
case 870:
case 3682:
case 3366:
case 1249:
case 2202:
case 2038:
case 892:
case 523:
case 836:
case 2272:
case 3706:
case 3406:
case 2544:
case 865:
case 208:
case 2995:
case 817:
case 572:
case 561:
case 2820:
case 2641:
case 2497:
case 2328:
case 2608:
case 1699:
case 2678:
case 397:
case 1823:
case 439:
case 366:
case 2886:
case 2968:
case 2158:
case 2852:
case 3239:
case 335:
case 312:
case 2797:
case 2847:
case 3429:
case 3129:
case 2494:
case 1003:
case 342:
case 3359:
case 2758:
case 2520:
case 2630:
case 372:
case 2794:
case 3909:
case 169:
case 3593:
case 1513:
case 52:
case 999:
case 2860:
case 576:
case 896:
case 511:
case 860:
case 904:
case 1133:
case 1381:
case 2244:
case 3326:
case 845:
case 875:
case 1084:
case 2332:
case 571:
case 2572:
case 562:
case 530:
case 553:
case 2810:
case 1286:
case 3405:
case 2223:
case 4060:
case 2433:
case 3221:
case 651:
case 2513:
case 643:
case 3705:
case 1395:
case 1860:
case 66:
case 757:
case 1502:
case 2084:
case 254:
case 3561:
case 1810:
case 750:
case 613:
case 1050:
case 1244:
case 3440:
case 2585:
case 3175:
case 79:
case 656:
case 1012:
case 3092:
case 1260:
case 1852:
case 1797:
case 785:
case 3537:
case 3717:
case 3114:
case 701:
case 4047:
case 2699:
case 0:
case 1158:
case 1968:
case 1886:
case 3764:
case 3957:
case 1678:
case 3374:
case 1520:
case 1458:
case 3998:
case 3534:
case 3304:
case 3624:
case 3714:
case 3117:
case 1210:
case 3071:
case 3290:
case 1494:
case 706:
case 3001:
case 61:
case 73:
case 1547:
case 755:
case 2213:
case 2249:
case 3211:
case 1291:
case 663:
case 2633:
case 1586:
case 3605:
case 3631:
case 3325:
case 108:
case 1995:
case 67:
case 1820:
case 3640:
case 4020:
case 1045:
case 2263:
case 3755:
case 727:
case 488:
case 1272:
case 2396:
case 1130:
case 3354:
case 605:
case 681:
case 8:
case 1441:
case 219:
case 1697:
case 3124:
case 1408:
case 1560:
case 1708:
case 3904:
case 3427:
case 1318:
case 3051:
case 1741:
case 1891:
case 3664:
case 2053:
case 2813:
case 1778:
case 3237:
case 3590:
case 1730:
case 3861:
case 1510:
case 3724:
case 3127:
case 686:
case 1220:
case 3424:
case 1108:
case 249:
case 1141:
case 3234:
case 1103:
case 1385:
case 1581:
case 929:
case 2162:
case 2952:
case 1653:
case 3636:
case 1173:
case 2532:
case 2986:
case 387:
case 826:
case 1923:
case 525:
case 1313:
case 2762:
case 821:
case 3809:
case 2944:
case 3266:
case 2818:
case 2595:
case 2112:
case 81:
case 863:
case 852:
case 302:
case 1896:
case 1746:
case 327:
case 1033:
case 506:
case 3559:
case 1487:
case 1184:
case 1787:
case 2670:
case 1446:
case 2960:
case 3939:
case 989:
case 2450:
case 1484:
case 3866:
case 1187:
case 6:
case 268:
case 881:
case 33:
case 501:
case 3279:
case 914:
case 1099:
case 414:
case 2008:
case 527:
case 3019:
case 2041:
case 520:
case 3043:
case 306:
case 1596:
case 2344:
case 3436:
case 959:
case 2991:
case 1453:
case 813:
case 3993:
case 3226:
case 1603:
case 474:
case 2386:
case 593:
case 2662:
case 1323:
case 843:
case 194:
case 1963:
case 2902:
case 2347:
case 53:
case 2030:
case 3069:
case 2295:
case 109:
case 1985:
case 385:
case 3566:
case 2352:
case 1646:
case 2145:
case 2400:
case 807:
case 580:
case 2310:
case 1687:
case 800:
case 333:
case 964:
case 587:
case 2518:
case 2895:
case 2745:
case 3339:
case 3509:
case 3076:
case 2360:
case 2189:
case 3006:
case 2920:
case 248:
case 278:
case 1684:
case 2170:
case 2445:
case 502:
case 2555:
case 2351:
case 1009:
case 2867:
case 1576:
case 1079:
case 2240:
case 1336:
case 2121:
case 3353:
case 3973:
case 2901:
case 2948:
case 2054:
case 950:
case 2661:
case 480:
case 1693:
case 2864:
case 925:
case 487:
case 1282:
case 2992:
case 2611:
case 2275:
case 2817:
case 2042:
case 2231:
case 100:
case 3423:
case 1139:
case 455:
case 43:
case 894:
case 122:
case 2490:
case 1788:
case 2790:
case 574:
case 173:
case 359:
case 809:
case 2267:
case 1066:
case 2524:
case 151:
case 3599:
case 2831:
case 4082:
case 1543:
case 156:
case 3096:
case 3987:
case 1856:
case 1882:
case 2190:
case 985:
case 2637:
case 2527:
case 3946:
case 788:
case 2264:
case 420:
case 4069:
case 3785:
case 344:
case 3463:
case 2111:
case 927:
case 3149:
case 2255:
case 3763:
case 389:
case 3485:
case 2540:
case 1869:
case 3623:
case 2371:
case 1793:
case 1843:
case 186:
case 2335:
case 2301:
case 2505:
case 3749:
case 2621:
case 1936:
case 4019:
case 2411:
case 314:
case 3953:
case 2161:
case 2004:
case 4043:
case 3413:
case 406:
case 1806:
case 2434:
case 2224:
case 1688:
case 329:
case 4076:
case 564:
case 3387:
case 987:
case 2137:
case 163:
case 980:
case 4006:
case 1639:
case 1529:
case 2437:
case 433:
case 14:
case 2564:
case 1026:
case 902:
case 17:
case 2065:
case 2517:
case 3262:
case 3850:
case 1425:
case 3010:
case 203:
case 1201:
case 1235:
case 1248:
case 1615:
case 3522:
case 1931:
case 2416:
case 1:
case 1975:
case 2166:
case 1665:
case 2039:
case 2982:
case 3212:
case 1551:
case 2716:
case 358:
case 1677:
case 3168:
case 1967:
case 634:
case 1754:
case 265:
case 2479:
case 1498:
case 2780:
case 1327:
case 1142:
case 2409:
case 4048:
case 588:
case 3628:
case 292:
case 1801:
case 1835:
case 2319:
case 2480:
case 3308:
case 1848:
case 3862:
case 3250:
case 3378:
case 236:
case 2343:
case 277:
case 1674:
case 1964:
case 1757:
case 1154:
case 3500:
case 2369:
case 1892:
case 1742:
case 231:
case 2929:
case 270:
case 240:
case 3086:
case 3589:
case 2179:
case 247:
case 1021:
case 2659:
case 3495:
case 3132:
case 1034:
case 1165:
case 1375:
case 1571:
case 3562:
case 1715:
case 2126:
case 3838:
case 1548:
case 3845:
case 3795:
case 1305:
case 1501:
case 1183:
case 1251:
case 1483:
case 3870:
case 1592:
case 2426:
case 20:
case 2236:
case 759:
case 1765:
case 1465:
case 3889:
case 2726:
case 1783:
case 3195:
case 1777:
case 1174:
case 275:
case 1061:
case 1317:
case 3428:
case 3397:
case 1707:
case 1104:
case 291:
case 1407:
case 3618:
case 3728:
case 1698:
case 2679:
case 3930:
case 1477:
case 3978:
case 1177:
case 1774:
case 267:
case 2459:
case 4051:
case 215:
case 3941:
case 232:
case 1314:
case 1642:
case 3822:
case 3394:
case 1107:
case 3908:
case 3289:
case 260:
case 2836:
case 3200:
case 1851:
case 3091:
case 3270:
case 1474:
case 1367:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760306401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,];
var gg_b = "1760306401/";

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
