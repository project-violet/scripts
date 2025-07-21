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
case 3887:
case 2457:
case 2358:
case 3671:
case 3340:
case 725:
case 1892:
case 2312:
case 3641:
case 718:
case 2526:
case 1669:
case 3001:
case 3907:
case 3417:
case 3936:
case 2148:
case 1945:
case 2206:
case 3319:
case 2149:
case 3150:
case 236:
case 2237:
case 1059:
case 3280:
case 3084:
case 3363:
case 3352:
case 210:
case 2179:
case 165:
case 1766:
case 2821:
case 877:
case 3082:
case 2922:
case 2539:
case 1014:
case 909:
case 3616:
case 2538:
case 2759:
case 152:
case 1388:
case 2712:
case 828:
case 4043:
case 3770:
case 2066:
case 2314:
case 3144:
case 1137:
case 1106:
case 1249:
case 2499:
case 913:
case 3718:
case 1248:
case 268:
case 276:
case 2865:
case 2656:
case 3261:
case 834:
case 4002:
case 981:
case 3752:
case 1991:
case 3174:
case 15:
case 3763:
case 1817:
case 2088:
case 3928:
case 2089:
case 3929:
case 1278:
case 641:
case 1894:
case 1366:
case 120:
case 597:
case 2689:
case 2769:
case 2211:
case 816:
case 694:
case 3364:
case 3083:
case 2923:
case 124:
case 249:
case 208:
case 3104:
case 2056:
case 1146:
case 3493:
case 697:
case 2713:
case 830:
case 590:
case 1932:
case 2786:
case 275:
case 48:
case 1529:
case 3485:
case 4050:
case 1528:
case 39:
case 3591:
case 253:
case 3420:
case 767:
case 969:
case 3016:
case 700:
case 1697:
case 3533:
case 3753:
case 3762:
case 3700:
case 588:
case 1614:
case 726:
case 1086:
case 1893:
case 3764:
case 2276:
case 3173:
case 922:
case 2368:
case 217:
case 1905:
case 1496:
case 2246:
case 3143:
case 2313:
case 1831:
case 3160:
case 3102:
case 3601:
case 1068:
case 3575:
case 4044:
case 3041:
case 1756:
case 92:
case 84:
case 3545:
case 3362:
case 950:
case 1013:
case 4074:
case 3071:
case 1052:
case 2641:
case 1384:
case 161:
case 418:
case 3526:
case 2671:
case 3358:
case 2172:
case 2887:
case 1018:
case 5:
case 2754:
case 51:
case 4027:
case 2505:
case 3110:
case 2352:
case 310:
case 512:
case 1274:
case 3821:
case 1070:
case 3179:
case 1465:
case 2417:
case 1662:
case 2318:
case 3148:
case 1782:
case 2907:
case 2494:
case 3237:
case 1244:
case 3206:
case 2103:
case 3149:
case 2319:
case 1784:
case 1857:
case 1242:
case 407:
case 645:
case 2770:
case 3758:
case 2082:
case 3922:
case 404:
case 1272:
case 2616:
case 2740:
case 3538:
case 3088:
case 1125:
case 679:
case 2763:
case 3089:
case 1203:
case 1250:
case 3499:
case 1054:
case 3865:
case 1316:
case 1243:
case 646:
case 308:
case 2104:
case 523:
case 3056:
case 1654:
case 986:
case 3713:
case 1273:
case 271:
case 3769:
case 2815:
case 349:
case 2896:
case 2364:
case 4079:
case 464:
case 2533:
case 2016:
case 2095:
case 4078:
case 2753:
case 4049:
case 3786:
case 3666:
case 3855:
case 1202:
case 1260:
case 29:
case 2591:
case 1383:
case 353:
case 899:
case 539:
case 317:
case 1053:
case 1062:
case 189:
case 2143:
case 3246:
case 3109:
case 1670:
case 231:
case 3369:
case 3467:
case 3368:
case 2173:
case 3276:
case 2764:
case 1341:
case 2071:
case 2545:
case 2300:
case 2353:
case 101:
case 6:
case 2601:
case 2102:
case 1663:
case 1524:
case 1783:
case 2575:
case 1151:
case 1714:
case 586:
case 3653:
case 2945:
case 1797:
case 1149:
case 3040:
case 3244:
case 3899:
case 1179:
case 265:
case 3274:
case 1821:
case 3018:
case 1359:
case 859:
case 3019:
case 2547:
case 2668:
case 1312:
case 3052:
case 818:
case 361:
case 2789:
case 3203:
case 3250:
case 3382:
case 2933:
case 168:
case 411:
case 939:
case 737:
case 2991:
case 25:
case 2817:
case 3125:
case 2278:
case 3701:
case 2894:
case 220:
case 483:
case 1922:
case 860:
case 2210:
case 2014:
case 1758:
case 1539:
case 804:
case 1538:
case 252:
case 2487:
case 3523:
case 3857:
case 3664:
case 728:
case 1066:
case 1666:
case 175:
case 2529:
case 2528:
case 3260:
case 3383:
case 153:
case 3064:
case 1990:
case 91:
case 1769:
case 1211:
case 3273:
case 716:
case 1688:
case 149:
case 108:
case 730:
case 1056:
case 3316:
case 3243:
case 3938:
case 2208:
case 3771:
case 3867:
case 3654:
case 3395:
case 1386:
case 135:
case 301:
case 2069:
case 2068:
case 3151:
case 3663:
case 3281:
case 2756:
case 2885:
case 278:
case 2536:
case 4025:
case 2013:
case 2507:
case 1369:
case 3926:
case 205:
case 2086:
case 2893:
case 3670:
case 1276:
case 946:
case 2111:
case 826:
case 1368:
case 2227:
case 499:
case 117:
case 2415:
case 2934:
case 770:
case 2659:
case 3716:
case 2905:
case 1313:
case 1109:
case 3053:
case 2831:
case 3795:
case 389:
case 3012:
case 3975:
case 1084:
case 1352:
case 2274:
case 3766:
case 2070:
case 1225:
case 2465:
case 477:
case 613:
case 2898:
case 990:
case 1936:
case 2782:
case 3058:
case 941:
case 1907:
case 821:
case 2161:
case 681:
case 1494:
case 474:
case 1103:
case 1319:
case 1150:
case 2052:
case 1641:
case 609:
case 3668:
case 3788:
case 3669:
case 3577:
case 1001:
case 3789:
case 1370:
case 4046:
case 1172:
case 2018:
case 1534:
case 3892:
case 569:
case 3817:
case 2125:
case 3279:
case 1928:
case 3991:
case 1174:
case 1763:
case 35:
case 3278:
case 1929:
case 437:
case 3106:
case 3249:
case 2382:
case 3137:
case 1261:
case 3248:
case 434:
case 2784:
case 2664:
case 654:
case 3388:
case 428:
case 3210:
case 657:
case 3014:
case 4011:
case 1695:
case 1354:
case 1082:
case 3097:
case 2272:
case 1740:
case 1616:
case 3356:
case 3697:
case 554:
case 1016:
case 1682:
case 1753:
case 1251:
case 650:
case 88:
case 557:
case 3932:
case 19:
case 2202:
case 1420:
case 2938:
case 2243:
case 2316:
case 3146:
case 3209:
case 1135:
case 1493:
case 1104:
case 2867:
case 2522:
case 2395:
case 3208:
case 2771:
case 2939:
case 2273:
case 171:
case 1431:
case 324:
case 1364:
case 1083:
case 1896:
case 366:
case 378:
case 509:
case 44:
case 2455:
case 3013:
case 3507:
case 1071:
case 1353:
case 1160:
case 2663:
case 1041:
case 669:
case 4037:
case 2783:
case 4006:
case 1575:
case 2151:
case 994:
case 2716:
case 2640:
case 3659:
case 3905:
case 3934:
case 2053:
case 3831:
case 2062:
case 2000:
case 513:
case 3658:
case 3496:
case 799:
case 2926:
case 997:
case 3086:
case 131:
case 1977:
case 3612:
case 442:
case 3227:
case 1764:
case 3111:
case 1011:
case 3351:
case 4082:
case 2822:
case 204:
case 852:
case 115:
case 2009:
case 3043:
case 1256:
case 1515:
case 128:
case 207:
case 3603:
case 1596:
case 2311:
case 3141:
case 776:
case 584:
case 768:
case 3264:
case 972:
case 3060:
case 1169:
case 134:
case 3475:
case 3829:
case 85:
case 587:
case 1113:
case 1308:
case 2746:
case 2610:
case 1436:
case 1917:
case 137:
case 940:
case 3751:
case 3531:
case 3987:
case 1076:
case 1637:
case 93:
case 1606:
case 2930:
case 218:
case 3262:
case 3253:
case 3035:
case 551:
case 1046:
case 2711:
case 3520:
case 243:
case 1845:
case 174:
case 1428:
case 2268:
case 3433:
case 1709:
case 2921:
case 1708:
case 3116:
case 2346:
case 177:
case 919:
case 2439:
case 1749:
case 3182:
case 3877:
case 142:
case 1748:
case 2306:
case 226:
case 714:
case 2438:
case 3263:
case 2166:
case 3252:
case 717:
case 3604:
case 2599:
case 1710:
case 2258:
case 3044:
case 4041:
case 2259:
case 3240:
case 735:
case 1006:
case 2598:
case 903:
case 2627:
case 1920:
case 866:
case 14:
case 651:
case 4071:
case 2188:
case 2557:
case 3996:
case 1349:
case 116:
case 471:
case 3915:
case 2297:
case 2706:
case 3361:
case 3405:
case 4083:
case 3780:
case 3602:
case 3101:
case 580:
case 492:
case 1379:
case 1477:
case 3042:
case 2426:
case 708:
case 267:
case 753:
case 3050:
case 3003:
case 1159:
case 38:
case 3594:
case 1158:
case 2609:
case 3643:
case 1832:
case 775:
case 1288:
case 838:
case 4016:
case 2890:
case 2078:
case 1162:
case 1153:
case 1781:
case 1661:
case 1957:
case 3008:
case 4066:
case 2650:
case 995:
case 2603:
case 3678:
case 2073:
case 1360:
case 562:
case 3679:
case 3822:
case 1343:
case 1216:
case 2171:
case 1555:
case 533:
case 2829:
case 56:
case 2828:
case 2445:
case 183:
case 2141:
case 1051:
case 468:
case 111:
case 2475:
case 2264:
case 2002:
case 1424:
case 656:
case 2644:
case 861:
case 2253:
case 3156:
case 1625:
case 2183:
case 325:
case 2674:
case 1760:
case 1702:
case 3027:
case 2987:
case 529:
case 410:
case 1998:
case 573:
case 2433:
case 1999:
case 3346:
case 1335:
case 1773:
case 3376:
case 2491:
case 343:
case 2807:
case 2520:
case 1241:
case 673:
case 199:
case 2252:
case 889:
case 1201:
case 1750:
case 1703:
case 2218:
case 414:
case 1826:
case 2681:
case 1344:
case 3438:
case 2182:
case 2877:
case 1530:
case 3306:
case 326:
case 556:
case 3189:
case 3212:
case 1025:
case 2270:
case 2074:
case 435:
case 3258:
case 2240:
case 3259:
case 408:
case 2660:
case 2602:
case 1163:
case 792:
case 282:
case 1119:
case 3823:
case 3557:
case 2405:
case 1744:
case 1118:
case 2434:
case 3297:
case 449:
case 3706:
case 50:
case 502:
case 1170:
case 3079:
case 1565:
case 300:
case 2184:
case 1140:
case 475:
case 28:
case 3608:
case 367:
case 79:
case 1372:
case 3048:
case 3955:
case 1061:
case 1965:
case 3051:
case 2833:
case 1311:
case 868:
case 1776:
case 876:
case 311:
case 720:
case 2113:
case 3216:
case 2309:
case 2308:
case 2891:
case 3735:
case 1610:
case 1746:
case 75:
case 2917:
case 237:
case 160:
case 2011:
case 1822:
case 104:
case 3302:
case 956:
case 2186:
case 3283:
case 3162:
case 2256:
case 3153:
case 107:
case 3957:
case 1008:
case 1269:
case 3164:
case 143:
case 3241:
case 596:
case 2845:
case 2327:
case 1268:
case 810:
case 765:
case 3743:
case 1921:
case 1213:
case 3335:
case 4070:
case 3999:
case 2875:
case 3304:
case 706:
case 4018:
case 4019:
case 1027:
case 3702:
case 3680:
case 3381:
case 4052:
case 4063:
case 2637:
case 2606:
case 461:
case 3422:
case 1156:
case 2046:
case 401:
case 595:
case 2646:
case 1258:
case 3490:
case 2006:
case 3154:
case 1598:
case 1212:
case 3080:
case 24:
case 778:
case 766:
case 2985:
case 3025:
case 814:
case 3703:
case 2748:
case 1337:
case 3826:
case 1438:
case 3344:
case 399:
case 2834:
case 4053:
case 4062:
case 3201:
case 489:
case 2805:
case 3374:
case 875:
case 1049:
case 1608:
case 3061:
case 1048:
case 853:
case 1079:
case 2288:
case 164:
case 738:
case 1890:
case 2611:
case 3342:
case 2112:
case 3565:
case 1823:
case 724:
case 1010:
case 3119:
case 216:
case 2349:
case 3282:
case 3118:
case 973:
case 2447:
case 1706:
case 3744:
case 727:
case 808:
case 3967:
case 2379:
case 2477:
case 2378:
case 3651:
case 3163:
case 2266:
case 230:
case 3838:
case 2343:
case 3309:
case 1672:
case 1829:
case 1445:
case 1828:
case 3436:
case 793:
case 337:
case 2295:
case 3308:
case 2735:
case 3407:
case 1141:
case 3168:
case 2051:
case 3833:
case 1642:
case 3169:
case 211:
case 1475:
case 3727:
case 1264:
case 2424:
case 2100:
case 2153:
case 328:
case 2781:
case 2661:
case 3596:
case 2957:
case 1603:
case 1351:
case 4014:
case 2283:
case 63:
case 3709:
case 2743:
case 544:
case 672:
case 1195:
case 1433:
case 2999:
case 377:
case 2304:
case 2271:
case 465:
case 1116:
case 1585:
case 121:
case 3845:
case 3428:
case 3327:
case 980:
case 4059:
case 3606:
case 1644:
case 2381:
case 3637:
case 1200:
case 3992:
case 2625:
case 1674:
case 3076:
case 67:
case 1531:
case 1987:
case 2080:
case 466:
case 3985:
case 1270:
case 4013:
case 1074:
case 1635:
case 3646:
case 3710:
case 1604:
case 4069:
case 57:
case 3006:
case 2772:
case 1044:
case 2490:
case 1240:
case 2521:
case 3037:
case 701:
case 3587:
case 299:
case 3779:
case 1380:
case 2423:
case 644:
case 1263:
case 572:
case 3805:
case 2374:
case 2201:
case 3778:
case 3749:
case 1218:
case 540:
case 3197:
case 647:
case 591:
case 4086:
case 987:
case 1761:
case 1681:
case 1877:
case 342:
case 2565:
case 1673:
case 2140:
case 3159:
case 951:
case 1254:
case 1517:
case 1003:
case 53:
case 89:
case 1594:
case 3158:
case 1643:
case 1101:
case 2967:
case 532:
case 892:
case 1660:
case 3266:
case 2774:
case 2163:
case 2152:
case 2651:
case 3378:
case 1042:
case 2350:
case 2119:
case 1405:
case 1361:
case 658:
case 2744:
case 3348:
case 1434:
case 1072:
case 424:
case 1915:
case 3447:
case 2185:
case 1623:
case 2091:
case 1564:
case 1989:
case 3954:
case 2595:
case 3639:
case 450:
case 2255:
case 42:
case 2516:
case 3638:
case 515:
case 3851:
case 2033:
case 2583:
case 1808:
case 3329:
case 319:
case 1966:
case 4057:
case 897:
case 537:
case 2632:
case 2435:
case 616:
case 3296:
case 2193:
case 1022:
case 2404:
case 184:
case 3736:
case 358:
case 3215:
case 3556:
case 1690:
case 2811:
case 2541:
case 1024:
case 2402:
case 2460:
case 3970:
case 151:
case 1155:
case 2571:
case 2959:
case 469:
case 344:
case 1231:
case 3728:
case 670:
case 3167:
case 3729:
case 577:
case 982:
case 3307:
case 2876:
case 1562:
case 3336:
case 1345:
case 1733:
case 786:
case 2117:
case 3448:
case 1334:
case 1540:
case 1461:
case 2194:
case 677:
case 2913:
case 3880:
case 570:
case 2806:
case 3478:
case 391:
case 3377:
case 2969:
case 340:
case 1570:
case 2584:
case 3479:
case 2968:
case 1165:
case 3157:
case 2790:
case 2472:
case 1518:
case 3900:
case 3953:
case 3410:
case 2986:
case 448:
case 3287:
case 1563:
case 3747:
case 2444:
case 1090:
case 180:
case 1294:
case 841:
case 637:
case 1121:
case 1622:
case 530:
case 3198:
case 1554:
case 1217:
case 3589:
case 3777:
case 1425:
case 1848:
case 2474:
case 2032:
case 634:
case 2323:
case 3038:
case 628:
case 4067:
case 1956:
case 2633:
case 2582:
case 3039:
case 1332:
case 615:
case 2192:
case 33:
case 1023:
case 1810:
case 2639:
case 1860:
case 3595:
case 750:
case 2851:
case 3255:
case 3481:
case 4094:
case 3091:
case 4017:
case 1029:
case 3120:
case 3404:
case 2707:
case 3193:
case 2296:
case 1873:
case 511:
case 258:
case 2215:
case 2328:
case 133:
case 3583:
case 3724:
case 722:
case 1843:
case 583:
case 2329:
case 219:
case 1513:
case 1007:
case 3958:
case 3571:
case 3045:
case 3722:
case 3959:
case 1984:
case 3460:
case 1568:
case 3912:
case 3075:
case 1569:
case 1677:
case 967:
case 486:
case 2307:
case 3876:
case 2728:
case 244:
case 1835:
case 3324:
case 3846:
case 2963:
case 812:
case 155:
case 1411:
case 1586:
case 1901:
case 2729:
case 1844:
case 3837:
case 240:
case 781:
case 2377:
case 3968:
case 3723:
case 3584:
case 839:
case 3221:
case 599:
case 1874:
case 4020:
case 2825:
case 1299:
case 4085:
case 2449:
case 3450:
case 1558:
case 1971:
case 2880:
case 1077:
case 3986:
case 907:
case 395:
case 2026:
case 4093:
case 2287:
case 3472:
case 1047:
case 2157:
case 904:
case 709:
case 1607:
case 2410:
case 2962:
case 2900:
case 3032:
case 2861:
case 3265:
case 3323:
case 1916:
case 879:
case 1437:
case 1406:
case 232:
case 943:
case 683:
case 1995:
case 1339:
case 1629:
case 2566:
case 23:
case 1983:
case 263:
case 3192:
case 1597:
case 3633:
case 959:
case 2038:
case 754:
case 2039:
case 3582:
case 925:
case 1583:
case 1724:
case 2391:
case 3476:
case 2808:
case 287:
case 2775:
case 1131:
case 1914:
case 1193:
case 794:
case 2022:
case 284:
case 3982:
case 2333:
case 1997:
case 999:
case 1811:
case 1185:
case 507:
case 1120:
case 3029:
case 2989:
case 1595:
case 560:
case 1322:
case 667:
case 1255:
case 504:
case 1481:
case 1516:
case 362:
case 1033:
case 2791:
case 3804:
case 2375:
case 2231:
case 3901:
case 1473:
case 3586:
case 886:
case 2562:
case 2345:
case 4087:
case 2293:
case 3568:
case 1912:
case 1075:
case 2220:
case 3984:
case 1402:
case 1460:
case 518:
case 3569:
case 251:
case 2285:
case 2451:
case 3036:
case 525:
case 3007:
case 2155:
case 1958:
case 1571:
case 1605:
case 559:
case 3647:
case 1005:
case 1034:
case 1230:
case 3047:
case 618:
case 3607:
case 2732:
case 3077:
case 1501:
case 625:
case 885:
case 2563:
case 1117:
case 2334:
case 1221:
case 3738:
case 2540:
case 3559:
case 2461:
case 3971:
case 3558:
case 1913:
case 3299:
case 1450:
case 1403:
case 1806:
case 1969:
case 3844:
case 3326:
case 1837:
case 2570:
case 1723:
case 1584:
case 3941:
case 3512:
case 1968:
case 2165:
case 564:
case 3597:
case 298:
case 1633:
case 2130:
case 1582:
case 500:
case 607:
case 3257:
case 2332:
case 567:
case 3629:
case 3187:
case 660:
case 3628:
case 1192:
case 1691:
case 604:
case 2810:
case 479:
case 2878:
case 3406:
case 2734:
case 790:
case 3916:
case 1444:
case 423:
case 3339:
case 2622:
case 3995:
case 1265:
case 2848:
case 3726:
case 1474:
case 1323:
case 2849:
case 3850:
case 3803:
case 3022:
case 2982:
case 3745:
case 384:
case 1707:
case 2446:
case 3690:
case 3333:
case 494:
case 1215:
case 3775:
case 387:
case 2267:
case 3391:
case 26:
case 2476:
case 682:
case 746:
case 2843:
case 119:
case 497:
case 1639:
case 1954:
case 68:
case 262:
case 3564:
case 2028:
case 3988:
case 2029:
case 3989:
case 147:
case 3553:
case 930:
case 3827:
case 3500:
case 3562:
case 1336:
case 1918:
case 3345:
case 1307:
case 3293:
case 2196:
case 1409:
case 3733:
case 1919:
case 4030:
case 144:
case 1728:
case 273:
case 1963:
case 3791:
case 1952:
case 916:
case 2411:
case 1167:
case 1729:
case 2513:
case 2007:
case 3155:
case 2036:
case 71:
case 2647:
case 1940:
case 2984:
case 2568:
case 2569:
case 351:
case 3451:
case 1026:
case 3563:
case 17:
case 2636:
case 3518:
case 1953:
case 2844:
case 2326:
case 140:
case 3570:
case 1478:
case 191:
case 1479:
case 2512:
case 3165:
case 2941:
case 934:
case 2874:
case 3461:
case 2298:
case 3334:
case 2299:
case 1449:
case 813:
case 2971:
case 1880:
case 2187:
case 2629:
case 2872:
case 3332:
case 857:
case 2983:
case 3810:
case 2628:
case 745:
case 2257:
case 1039:
case 3130:
case 488:
case 2726:
case 1777:
case 3848:
case 2803:
case 1964:
case 20:
case 974:
case 3090:
case 380:
case 1747:
case 132:
case 3734:
case 441:
case 723:
case 2995:
case 490:
case 779:
case 666:
case 678:
case 1021:
case 99:
case 2812:
case 3099:
case 1190:
case 2574:
case 444:
case 1794:
case 3139:
case 3852:
case 3863:
case 971:
case 3819:
case 2765:
case 447:
case 2685:
case 3277:
case 3466:
case 992:
case 3818:
case 2290:
case 403:
case 1561:
case 638:
case 3548:
case 2730:
case 2017:
case 3549:
case 2503:
case 1470:
case 1792:
case 3951:
case 3578:
case 1065:
case 3667:
case 32:
case 2572:
case 55:
case 2721:
case 1909:
case 1866:
case 2105:
case 3057:
case 3510:
case 627:
case 520:
case 2134:
case 2401:
case 2365:
case 2542:
case 1452:
case 624:
case 2814:
case 3126:
case 458:
case 194:
case 1291:
case 2502:
case 141:
case 620:
case 1978:
case 1551:
case 190:
case 1124:
case 527:
case 3396:
case 2471:
case 1233:
case 3315:
case 2145:
case 3961:
case 524:
case 1055:
case 2573:
case 1785:
case 188:
case 1856:
case 1453:
case 357:
case 1400:
case 1462:
case 2222:
case 3508:
case 2694:
case 43:
case 463:
case 2224:
case 3980:
case 2020:
case 472:
case 3925:
case 665:
case 2085:
case 2692:
case 440:
case 2495:
case 505:
case 3236:
case 1245:
case 381:
case 3715:
case 1630:
case 2906:
case 2581:
case 3853:
case 3800:
case 3862:
case 2031:
case 566:
case 578:
case 1385:
case 3699:
case 606:
case 2886:
case 348:
case 1122:
case 3456:
case 3698:
case 4045:
case 2489:
case 1:
case 2488:
case 3631:
case 269:
case 3330:
case 953:
case 2870:
case 561:
case 1757:
case 3812:
case 975:
case 2466:
case 386:
case 2819:
case 3685:
case 2277:
case 3976:
case 3620:
case 3321:
case 2139:
case 949:
case 1398:
case 2247:
case 1801:
case 1904:
case 2852:
case 744:
case 1414:
case 1935:
case 2951:
case 22:
case 862:
case 2579:
case 2667:
case 1412:
case 2787:
case 1615:
case 3730:
case 3094:
case 1459:
case 1458:
case 1357:
case 2549:
case 3550:
case 935:
case 3503:
case 3911:
case 1973:
case 758:
case 3401:
case 3542:
case 1177:
case 917:
case 3223:
case 1943:
case 3572:
case 1798:
case 86:
case 3134:
case 1147:
case 2057:
case 914:
case 1950:
case 1413:
case 2657:
case 2864:
case 4032:
case 2961:
case 1136:
case 3145:
case 1895:
case 693:
case 1468:
case 1367:
case 936:
case 3560:
case 2229:
case 3175:
case 1096:
case 1883:
case 3222:
case 73:
case 3694:
case 2509:
case 3543:
case 802:
case 1942:
case 1486:
case 1511:
case 3495:
case 3868:
case 2207:
case 791:
case 3581:
case 2715:
case 3869:
case 281:
case 740:
case 3906:
case 1687:
case 3224:
case 3813:
case 976:
case 3191:
case 3692:
case 501:
case 3504:
case 77:
case 248:
case 2456:
case 2698:
case 3755:
case 385:
case 3886:
case 3093:
case 1576:
case 2853:
case 4034:
case 2527:
case 3031:
case 2862:
case 209:
case 661:
case 3801:
case 3497:
case 510:
case 473:
case 2794:
case 2205:
case 1946:
case 3935:
case 312:
case 186:
case 1685:
case 1092:
case 3226:
case 614:
case 1976:
case 896:
case 536:
case 2021:
case 3537:
case 751:
case 1330:
case 1812:
case 2454:
case 3757:
case 1574:
case 31:
case 2392:
case 4036:
case 1132:
case 346:
case 2419:
case 1721:
case 608:
case 2909:
case 2655:
case 2866:
case 2908:
case 3239:
case 2418:
case 1134:
case 1365:
case 1542:
case 1911:
case 989:
case 2452:
case 784:
case 576:
case 649:
case 3177:
case 1094:
case 2440:
case 1290:
case 4028:
case 1017:
case 2888:
case 4029:
case 1550:
case 1503:
case 3696:
case 3357:
case 2792:
case 2065:
case 462:
case 653:
case 3960:
case 402:
case 2720:
case 798:
case 345:
case 1573:
case 3486:
case 288:
case 2665:
case 2856:
case 2453:
case 2462:
case 1222:
case 3883:
case 3096:
case 961:
case 3972:
case 553:
case 508:
case 1441:
case 323:
case 379:
case 3468:
case 3367:
case 3469:
case 241:
case 780:
case 2978:
case 2551:
case 2124:
case 3816:
case 3903:
case 2233:
case 668:
case 2793:
case 40:
case 2055:
case 456:
case 4047:
case 2320:
case 1483:
case 2385:
case 4077:
case 1755:
case 2621:
case 1093:
case 1224:
case 517:
case 1020:
case 2464:
case 3871:
case 3129:
case 2331:
case 610:
case 1085:
case 1692:
case 3974:
case 1495:
case 1133:
case 2630:
case 1906:
case 1416:
case 3944:
case 2226:
case 847:
case 1466:
case 1819:
case 2087:
case 1818:
case 924:
case 3794:
case 1139:
case 2801:
case 3030:
case 212:
case 2399:
case 2904:
case 1863:
case 729:
case 1138:
case 1489:
case 1840:
case 2:
case 21:
case 169:
case 1098:
case 2981:
case 3021:
case 2884:
case 451:
case 1099:
case 2973:
case 4022:
case 484:
case 858:
case 2238:
case 692:
case 3394:
case 3866:
case 3655:
case 487:
case 2798:
case 122:
case 3418:
case 733:
case 3317:
case 397:
case 3908:
case 3065:
case 2902:
case 12:
case 978:
case 1667:
case 1854:
case 3889:
case 2615:
case 3440:
case 2459:
case 2458:
case 2357:
case 3910:
case 2883:
case 3453:
case 3462:
case 83:
case 2972:
case 1509:
case 906:
case 1067:
case 2942:
case 3856:
case 3665:
case 2486:
case 70:
case 3949:
case 2950:
case 1657:
case 1961:
case 3055:
case 2107:
case 3233:
case 1315:
case 2895:
case 223:
case 592:
case 832:
case 390:
case 3124:
case 2816:
case 2469:
case 341:
case 3551:
case 3978:
case 1229:
case 1699:
case 148:
case 87:
case 3122:
case 2576:
case 1800:
case 1862:
case 1527:
case 109:
case 3385:
case 840:
case 1207:
case 2841:
case 891:
case 2944:
case 1715:
case 181:
case 95:
case 2687:
case 2129:
case 239:
case 3275:
case 2767:
case 1980:
case 3464:
case 872:
case 2871:
case 2974:
case 1925:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753056002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,];
var gg_b = "1753056002/";

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
