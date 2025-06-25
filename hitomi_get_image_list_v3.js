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
case 1427:
case 2619:
case 1436:
case 3897:
case 4062:
case 2289:
case 1919:
case 3400:
case 3394:
case 3163:
case 3177:
case 395:
case 3375:
case 3533:
case 3591:
case 749:
case 1042:
case 255:
case 1151:
case 2933:
case 2323:
case 3287:
case 3608:
case 2899:
case 3617:
case 3946:
case 3745:
case 2495:
case 2474:
case 2266:
case 3145:
case 653:
case 3802:
case 1:
case 1584:
case 332:
case 1340:
case 2077:
case 109:
case 1793:
case 1811:
case 3628:
case 3844:
case 3214:
case 253:
case 3822:
case 3860:
case 1610:
case 1653:
case 216:
case 1193:
case 1131:
case 2910:
case 2733:
case 2791:
case 1414:
case 2850:
case 2383:
case 986:
case 1028:
case 3977:
case 951:
case 1951:
case 1084:
case 886:
case 1008:
case 4041:
case 2046:
case 3256:
case 18:
case 543:
case 1435:
case 2229:
case 603:
case 1839:
case 1970:
case 2670:
case 429:
case 1119:
case 1542:
case 1220:
case 205:
case 356:
case 2830:
case 2710:
case 3882:
case 2693:
case 3207:
case 2110:
case 1931:
case 1993:
case 166:
case 3218:
case 1679:
case 1524:
case 3033:
case 842:
case 3604:
case 2478:
case 605:
case 3146:
case 2545:
case 488:
case 1200:
case 840:
case 464:
case 1301:
case 3945:
case 2496:
case 3649:
case 3437:
case 2855:
case 1269:
case 2459:
case 1549:
case 1878:
case 3603:
case 3426:
case 3889:
case 3485:
case 3572:
case 597:
case 1523:
case 1975:
case 4037:
case 2958:
case 2675:
case 1994:
case 1176:
case 1798:
case 41:
case 2754:
case 4026:
case 457:
case 4085:
case 260:
case 3457:
case 3516:
case 190:
case 1346:
case 2308:
case 2202:
case 522:
case 2835:
case 2647:
case 3101:
case 3866:
case 2244:
case 2328:
case 4057:
case 3981:
case 785:
case 1112:
case 178:
case 3940:
case 3121:
case 3964:
case 1832:
case 50:
case 2260:
case 118:
case 520:
case 1205:
case 2814:
case 894:
case 3038:
case 239:
case 2698:
case 3809:
case 1175:
case 3213:
case 49:
case 1794:
case 2892:
case 791:
case 577:
case 2676:
case 3425:
case 2172:
case 4005:
case 3271:
case 639:
case 2473:
case 1257:
case 2467:
case 3370:
case 589:
case 1499:
case 2282:
case 2568:
case 1634:
case 2612:
case 2324:
case 2138:
case 284:
case 268:
case 172:
case 3740:
case 2818:
case 2738:
case 3781:
case 2388:
case 3393:
case 3331:
case 3469:
case 1226:
case 1615:
case 2304:
case 1747:
case 3072:
case 2836:
case 2915:
case 528:
case 2827:
case 534:
case 1237:
case 1345:
case 1147:
case 668:
case 3515:
case 2116:
case 170:
case 621:
case 1689:
case 2729:
case 1219:
case 3955:
case 3678:
case 2129:
case 4093:
case 3696:
case 1578:
case 544:
case 3192:
case 2143:
case 2007:
case 2291:
case 753:
case 2709:
case 2424:
case 1552:
case 2442:
case 2743:
case 325:
case 776:
case 3431:
case 1095:
case 2587:
case 463:
case 1666:
case 3935:
case 2056:
case 2165:
case 1100:
case 2373:
case 3136:
case 2367:
case 3632:
case 2641:
case 3305:
case 3107:
case 755:
case 1463:
case 249:
case 1477:
case 3118:
case 2253:
case 1980:
case 4070:
case 1532:
case 1162:
case 3509:
case 2014:
case 2461:
case 2428:
case 3992:
case 796:
case 2943:
case 63:
case 1313:
case 2909:
case 2592:
case 705:
case 3277:
case 3543:
case 3854:
case 1270:
case 3695:
case 2417:
case 1446:
case 3529:
case 2189:
case 1595:
case 1371:
case 3956:
case 3755:
case 2929:
case 1629:
case 23:
case 847:
case 3907:
case 226:
case 2821:
case 1052:
case 1180:
case 254:
case 1231:
case 1141:
case 2279:
case 3114:
case 2507:
case 2662:
case 1330:
case 394:
case 2620:
case 1741:
case 703:
case 3135:
case 3089:
case 2166:
case 2055:
case 3565:
case 626:
case 3787:
case 654:
case 3326:
case 3815:
case 3735:
case 3385:
case 1096:
case 2600:
case 2766:
case 1900:
case 1665:
case 566:
case 4012:
case 535:
case 2669:
case 1157:
case 930:
case 1697:
case 1401:
case 3171:
case 2396:
case 830:
case 2272:
case 3412:
case 1590:
case 3833:
case 3750:
case 667:
case 527:
case 762:
case 3150:
case 893:
case 2258:
case 832:
case 285:
case 1421:
case 1335:
case 1726:
case 1247:
case 2686:
case 578:
case 1986:
case 1785:
case 2625:
case 2216:
case 2599:
case 1126:
case 120:
case 683:
case 1185:
case 1039:
case 1387:
case 4076:
case 1817:
case 3999:
case 995:
case 3544:
case 806:
case 3380:
case 3341:
case 2782:
case 1622:
case 2483:
case 1905:
case 1884:
case 590:
case 211:
case 906:
case 3130:
case 3281:
case 895:
case 1828:
case 1644:
case 2050:
case 2013:
case 2182:
case 122:
case 2148:
case 283:
case 3522:
case 3240:
case 1392:
case 1276:
case 721:
case 838:
case 342:
case 2513:
case 873:
case 881:
case 2254:
case 4047:
case 2863:
case 856:
case 3950:
case 3913:
case 813:
case 2197:
case 117:
case 1957:
case 1539:
case 340:
case 2657:
case 15:
case 3002:
case 402:
case 1169:
case 2571:
case 177:
case 1073:
case 2099:
case 3971:
case 1356:
case 3475:
case 1105:
case 3879:
case 128:
case 2122:
case 510:
case 2530:
case 3494:
case 875:
case 1888:
case 1824:
case 1648:
case 2760:
case 1212:
case 1906:
case 1705:
case 351:
case 2722:
case 570:
case 3930:
case 3320:
case 815:
case 739:
case 2144:
case 3362:
case 2845:
case 458:
case 4075:
case 3201:
case 2449:
case 1327:
case 3799:
case 512:
case 2102:
case 1125:
case 3097:
case 1186:
case 3300:
case 2702:
case 598:
case 436:
case 1786:
case 3885:
case 89:
case 3826:
case 1265:
case 3117:
case 526:
case 554:
case 2455:
case 1545:
case 99:
case 2301:
case 3717:
case 105:
case 2542:
case 2220:
case 2588:
case 2262:
case 3593:
case 4089:
case 3728:
case 1693:
case 2931:
case 1110:
case 1153:
case 2368:
case 1979:
case 3761:
case 2679:
case 3570:
case 1871:
case 2435:
case 907:
case 28:
case 2839:
case 2970:
case 2487:
case 3295:
case 1670:
case 807:
case 2119:
case 3274:
case 3857:
case 1813:
case 2061:
case 1791:
case 2414:
case 1850:
case 1432:
case 103:
case 1209:
case 2028:
case 1133:
case 1191:
case 2951:
case 53:
case 1651:
case 2084:
case 745:
case 2:
case 363:
case 3338:
case 2381:
case 3742:
case 3443:
case 1179:
case 3051:
case 116:
case 3142:
case 2653:
case 3188:
case 2364:
case 2131:
case 609:
case 3917:
case 474:
case 6:
case 81:
case 1474:
case 857:
case 2517:
case 4009:
case 3070:
case 2508:
case 3429:
case 87:
case 957:
case 3316:
case 3825:
case 2407:
case 365:
case 319:
case 2418:
case 437:
case 3358:
case 3252:
case 379:
case 155:
case 2151:
case 1991:
case 1323:
case 1933:
case 2633:
case 3519:
case 3372:
case 2770:
case 1349:
case 2427:
case 425:
case 2919:
case 387:
case 3465:
case 3278:
case 3869:
case 2049:
case 3800:
case 3259:
case 486:
case 2615:
case 2747:
case 591:
case 210:
case 2285:
case 1836:
case 1716:
case 1827:
case 3601:
case 2147:
case 1282:
case 1568:
case 2912:
case 1324:
case 2206:
case 3862:
case 1138:
case 829:
case 3094:
case 1521:
case 789:
case 3379:
case 168:
case 3512:
case 272:
case 2023:
case 3668:
case 121:
case 670:
case 3621:
case 929:
case 1738:
case 1807:
case 1388:
case 1172:
case 3703:
case 1856:
case 4060:
case 3149:
case 1473:
case 2874:
case 1772:
case 1467:
case 3103:
case 2895:
case 2194:
case 734:
case 1954:
case 4002:
case 864:
case 1081:
case 2377:
case 2175:
case 3460:
case 3983:
case 2998:
case 1064:
case 2794:
case 1411:
case 964:
case 2775:
case 728:
case 2583:
case 1758:
case 761:
case 888:
case 3211:
case 1244:
case 1938:
case 846:
case 2638:
case 2083:
case 2112:
case 3640:
case 1361:
case 1134:
case 3880:
case 3310:
case 946:
case 2712:
case 2205:
case 1814:
case 2450:
case 3841:
case 160:
case 3273:
case 290:
case 511:
case 1115:
case 2346:
case 1439:
case 2616:
case 14:
case 1835:
case 2286:
case 1647:
case 2523:
case 2975:
case 2658:
case 882:
case 1675:
case 2198:
case 567:
case 2994:
case 3923:
case 3333:
case 2176:
case 627:
case 308:
case 3448:
case 1068:
case 2430:
case 1021:
case 3594:
case 2896:
case 635:
case 3949:
case 70:
case 1972:
case 1001:
case 4048:
case 1459:
case 1297:
case 980:
case 3903:
case 1536:
case 456:
case 3627:
case 505:
case 3500:
case 82:
case 3204:
case 3636:
case 438:
case 1965:
case 1600:
case 473:
case 481:
case 1527:
case 2900:
case 1359:
case 1821:
case 3242:
case 3520:
case 759:
case 3618:
case 126:
case 2293:
case 154:
case 2052:
case 3607:
case 3562:
case 2141:
case 1868:
case 2920:
case 364:
case 1507:
case 3491:
case 3348:
case 3812:
case 1417:
case 2270:
case 2446:
case 1408:
case 1556:
case 3796:
case 415:
case 643:
case 503:
case 3974:
case 1035:
case 2595:
case 3196:
case 475:
case 1929:
case 13:
case 1789:
case 4010:
case 2629:
case 4053:
case 958:
case 2251:
case 243:
case 2032:
case 1014:
case 3041:
case 1428:
case 3152:
case 2643:
case 3692:
case 836:
case 2609:
case 1484:
case 858:
case 2313:
case 1909:
case 3752:
case 3410:
case 329:
case 3360:
case 3284:
case 2941:
case 3614:
case 1641:
case 3322:
case 1680:
case 1864:
case 2463:
case 744:
case 1210:
case 2980:
case 149:
case 1092:
case 1514:
case 1840:
case 3261:
case 1311:
case 3580:
case 576:
case 2095:
case 1765:
case 1966:
case 493:
case 432:
case 2666:
case 3302:
case 2074:
case 3635:
case 3847:
case 516:
case 3217:
case 1056:
case 1165:
case 3687:
case 3208:
case 380:
case 1143:
case 1007:
case 1709:
case 2823:
case 1442:
case 3062:
case 2552:
case 346:
case 3020:
case 3894:
case 1488:
case 1743:
case 709:
case 1109:
case 952:
case 850:
case 2803:
case 2689:
case 1404:
case 3174:
case 3978:
case 406:
case 950:
case 1129:
case 1036:
case 3000:
case 555:
case 3795:
case 1555:
case 3069:
case 4058:
case 3773:
case 661:
case 3585:
case 2186:
case 3767:
case 307:
case 628:
case 3365:
case 3959:
case 3173:
case 2725:
case 568:
case 1403:
case 2804:
case 2786:
case 3167:
case 261:
case 191:
case 3506:
case 2307:
case 3893:
case 3711:
case 2318:
case 2824:
case 1423:
case 1606:
case 1760:
case 2906:
case 1948:
case 899:
case 1144:
case 234:
case 3086:
case 1197:
case 4038:
case 3025:
case 1657:
case 2169:
case 1395:
case 539:
case 3939:
case 277:
case 1797:
case 710:
case 3557:
case 2073:
case 3671:
case 2769:
case 2356:
case 2392:
case 3438:
case 617:
case 2276:
case 65:
case 3851:
case 3650:
case 712:
case 3309:
case 2511:
case 1782:
case 560:
case 2314:
case 111:
case 1483:
case 2884:
case 735:
case 819:
case 979:
case 3911:
case 865:
case 1182:
case 2861:
case 171:
case 54:
case 183:
case 620:
case 1148:
case 2106:
case 2986:
case 2785:
case 562:
case 727:
case 2602:
case 3366:
case 3759:
case 2137:
case 3973:
case 622:
case 220:
case 3699:
case 2387:
case 1846:
case 2817:
case 2737:
case 718:
case 963:
case 3223:
case 1352:
case 863:
case 2275:
case 3006:
case 792:
case 733:
case 3990:
case 2969:
case 3037:
case 1669:
case 2157:
case 1997:
case 297:
case 3389:
case 3203:
case 37:
case 1396:
case 3249:
case 2757:
case 3026:
case 31:
case 575:
case 1755:
case 2778:
case 3629:
case 3574:
case 970:
case 2995:
case 2796:
case 1155:
case 403:
case 569:
case 2974:
case 1357:
case 910:
case 3350:
case 812:
case 3883:
case 3609:
case 2453:
case 229:
case 1277:
case 1263:
case 1509:
case 2876:
case 912:
case 872:
case 2041:
case 3251:
case 2080:
case 496:
case 1419:
case 2636:
case 2204:
case 3900:
case 405:
case 631:
case 688:
case 1135:
case 1089:
case 556:
case 1565:
case 3962:
case 3920:
case 264:
case 799:
case 2732:
case 2812:
case 2491:
case 2382:
case 3293:
case 3052:
case 2288:
case 2562:
case 2520:
case 2618:
case 1907:
case 2132:
case 231:
case 3141:
case 2894:
case 1431:
case 125:
case 3552:
case 833:
case 2479:
case 1858:
case 763:
case 878:
case 2952:
case 992:
case 978:
case 1589:
case 2774:
case 890:
case 1872:
case 455:
case 3445:
case 1156:
case 646:
case 3849:
case 3578:
case 2174:
case 137:
case 3803:
case 1678:
case 595:
case 1756:
case 2195:
case 3596:
case 2978:
case 2655:
case 2261:
case 3532:
case 282:
case 1009:
case 680:
case 2580:
case 1718:
case 765:
case 3120:
case 2344:
case 2228:
case 2614:
case 2322:
case 1914:
case 1632:
case 3762:
case 935:
case 1043:
case 1246:
case 3399:
case 1987:
case 1470:
case 1566:
case 682:
case 280:
case 1136:
case 3666:
case 476:
case 4077:
case 2635:
case 2847:
case 593:
case 1325:
case 1935:
case 1447:
case 2329:
case 16:
case 3356:
case 2671:
case 2025:
case 35:
case 1002:
case 4081:
case 3957:
case 439:
case 4040:
case 1044:
case 3011:
case 3464:
case 69:
case 2309:
case 1950:
case 2283:
case 2190:
case 2613:
case 2650:
case 736:
case 2343:
case 3392:
case 2438:
case 2851:
case 142:
case 2005:
case 2537:
case 1659:
case 2365:
case 421:
case 3804:
case 88:
case 700:
case 2173:
case 3926:
case 2069:
case 1799:
case 1201:
case 2585:
case 484:
case 98:
case 2472:
case 1097:
case 2767:
case 2773:
case 3125:
case 3212:
case 3824:
case 3648:
case 1362:
case 2111:
case 1930:
case 607:
case 1548:
case 1268:
case 186:
case 1221:
case 3307:
case 859:
case 1494:
case 61:
case 1082:
case 1113:
case 2990:
case 1150:
case 8:
case 3275:
case 1690:
case 2006:
case 1048:
case 4001:
case 809:
case 3294:
case 67:
case 9:
case 3590:
case 1891:
case 2434:
case 909:
case 1171:
case 3059:
case 3401:
case 4068:
case 4021:
case 21:
case 2139:
case 257:
case 3757:
case 1771:
case 3355:
case 3969:
case 2037:
case 2389:
case 2415:
case 2203:
case 2819:
case 2739:
case 397:
case 1130:
case 2911:
case 1522:
case 1240:
case 2505:
case 322:
case 3861:
case 1560:
case 1476:
case 460:
case 1380:
case 1544:
case 1810:
case 1730:
case 3511:
case 1853:
case 708:
case 3905:
case 3884:
case 3660:
case 1341:
case 3622:
case 3185:
case 320:
case 2973:
case 1502:
case 1667:
case 2159:
case 3737:
case 3817:
case 2699:
case 3387:
case 3808:
case 3335:
case 3925:
case 3247:
case 2759:
case 2366:
case 462:
case 3487:
case 2857:
case 2570:
case 2466:
case 3839:
case 788:
case 3084:
case 731:
case 4087:
case 1376:
case 175:
case 43:
case 1292:
case 1010:
case 1398:
case 1441:
case 3061:
case 3028:
case 115:
case 1977:
case 299:
case 1480:
case 764:
case 2663:
case 1963:
case 4035:
case 977:
case 2019:
case 3504:
case 1746:
case 1945:
case 1227:
case 3301:
case 2717:
case 2837:
case 2315:
case 1604:
case 2904:
case 1146:
case 3859:
case 2117:
case 366:
case 3931:
case 3993:
case 1642:
case 1207:
case 1091:
case 1033:
case 173:
case 2184:
case 889:
case 3588:
case 3262:
case 124:
case 2531:
case 729:
case 2128:
case 3542:
case 3220:
case 2161:
case 4055:
case 113:
case 1312:
case 1579:
case 2806:
case 2784:
case 1777:
case 279:
case 106:
case 3088:
case 2252:
case 2031:
case 4036:
case 2093:
case 1763:
case 3633:
case 3151:
case 1177:
case 3407:
case 822:
case 537:
case 782:
case 1533:
case 3890:
case 90:
case 404:
case 3919:
case 920:
case 3436:
case 3170:
case 2278:
case 3004:
case 2519:
case 780:
case 2372:
case 4018:
case 4007:
case 820:
case 619:
case 3427:
case 665:
case 2409:
case 3241:
case 1214:
case 3193:
case 3131:
case 3528:
case 3610:
case 3653:
case 2124:
case 132:
case 193:
case 3584:
case 1844:
case 746:
case 1510:
case 3793:
case 3731:
case 3492:
case 3456:
case 514:
case 1145:
case 3508:
case 3517:
case 1802:
case 897:
case 1235:
case 2429:
case 2886:
case 523:
case 1617:
case 1745:
case 1287:
case 2646:
case 3873:
case 997:
case 130:
case 2104:
case 4092:
case 2047:
case 3257:
case 3874:
case 602:
case 1829:
case 1486:
case 542:
case 2239:
case 1271:
case 2444:
case 845:
case 1843:
case 3976:
case 3775:
case 3654:
case 3363:
case 1213:
case 3998:
case 540:
case 2422:
case 1809:
case 600:
case 636:
case 1901:
case 551:
case 1515:
case 3003:
case 3147:
case 586:
case 1865:
case 2259:
case 3049:
case 491:
case 3285:
case 147:
case 79:
case 3615:
case 3226:
case 398:
case 1968:
case 1393:
case 1164:
case 1781:
case 258:
case 1140:
case 3912:
case 1230:
case 1181:
case 1406:
case 1623:
case 3798:
case 2333:
case 2575:
case 3176:
case 208:
case 3852:
case 3430:
case 2012:
case 3776:
case 3658:
case 3878:
case 3549:
case 1572:
case 548:
case 1485:
case 1319:
case 327:
case 1603:
case 4030:
case 1426:
case 2949:
case 1649:
case 1964:
case 2880:
case 2664:
case 1538:
case 2076:
case 3205:
case 3450:
case 4071:
case 318:
case 650:
case 3712:
case 3832:
case 1168:
case 1054:
case 1981:
case 2211:
case 1940:
case 3112:
case 1768:
case 392:
case 250:
case 3286:
case 652:
case 77:
case 3947:
case 3616:
case 1866:
case 3471:
case 483:
case 1101:
case 757:
case 2267:
case 71:
case 2273:
case 2547:
case 411:
case 1701:
case 614:
case 1687:
case 2470:
case 3165:
case 3367:
case 3535:
case 2136:
case 674:
case 3587:
case 1847:
case 409:
case 563:
case 2816:
case 2736:
case 2935:
case 1302:
case 1261:
case 1541:
case 3840:
case 2451:
case 3514:
case 2718:
case 214:
case 3311:
case 3641:
case 1322:
case 2305:
case 1614:
case 2632:
case 2914:
case 1360:
case 1284:
case 349:
case 3092:
case 274:
case 2043:
case 3864:
case 3036:
case 4088:
case 860:
case 444:
case 3129:
case 4042:
case 1795:
case 1996:
case 579:
case 960:
case 3729:
case 84:
case 2955:
case 2756:
case 4024:
case 2678:
case 3027:
case 565:
case 1978:
case 225:
case 2493:
case 1020:
case 1894:
case 2792:
case 1875:
case 2652:
case 3709:
case 637:
case 769:
case 294:
case 3507:
case 3662:
case 715:
case 839:
case 164:
case 1812:
case 1732:
case 1224:
case 2714:
case 2834:
case 2918:
case 1618:
case 2907:
case 326:
case 775:
case 3821:
case 1520:
case 3868:
case 1132:
case 131:
case 188:
case 2114:
case 1636:
case 2326:
case 2936:
case 2815:
case 2735:
case 1204:
case 466:
case 694:
case 3965:
case 3766:
case 3600:
case 2135:
case 3536:
case 3801:
case 2337:
case 3055:
case 2565:
case 2787:
case 713:
case 968:
case 3909:
case 1898:
case 921:
case 2277:
case 884:
case 3592:
case 1752:
case 2263:
case 4008:
case 868:
case 3014:
case 2509:
case 4017:
case 1692:
case 3943:
case 1080:
case 1656:
case 3929:
case 459:
case 4061:
case 3556:
case 1995:
case 2155:
case 1178:
case 3189:
case 1973:
case 1525:
case 1159:
case 3846:
case 418:
case 1057:
case 3625:
case 3686:
case 433:
case 4083:
case 3599:
case 1759:
case 478:
case 2611:
case 2130:
case 1911:
case 2281:
case 955:
case 3944:
case 1505:
case 3148:
case 383:
case 371:
case 2240:
case 2560:
case 2476:
case 3182:
case 2380:
case 1454:
case 2730:
case 2810:
case 2853:
case 3483:
case 311:
case 2498:
case 3605:
case 2341:
case 1249:
case 2171:
case 3396:
case 1569:
case 3272:
case 1026:
case 2597:
case 508:
case 1139:
case 1085:
case 3669:
case 2771:
case 1037:
case 367:
case 17:
case 541:
case 601:
case 1819:
case 2113:
case 953:
case 1990:
case 2150:
case 3258:
case 2048:
case 916:
case 876:
case 427:
case 385:
case 2713:
case 2833:
case 1434:
case 816:
case 3352:
case 3234:
case 251:
case 2362:
case 2930:
case 2879:
case 1506:
case 1458:
case 4049:
case 2475:
case 903:
case 3160:
case 2582:
case 2221:
case 286:
case 3530:
case 1893:
case 2494:
case 3744:
case 472:
case 1537:
case 2199:
case 536:
case 2659:
case 1167:
case 3215:
case 3626:
case 3702:
case 3685:
case 1173:
case 412:
case 3449:
case 1069:
case 2799:
case 3845:
case 1472:
case 107:
case 1585:
case 3102:
case 1773:
case 1526:
case 996:
case 2044:
case 1309:
case 2913:
case 1613:
case 1438:
case 3513:
case 2060:
case 1790:
case 3550:
case 52:
case 1005:
case 500:
case 1557:
case 26:
case 2971:
case 502:
case 1025:
case 3374:
case 3197:
case 642:
case 1086:
case 1870:
case 3571:
case 2145:
case 1070:
case 3266:
case 737:
case 2802:
case 2235:
case 1704:
case 1429:
case 2608:
case 3899:
case 3474:
case 693:
case 967:
case 1104:
case 1724:
case 1409:
case 2860:
case 1232:
case 1984:
case 2214:
case 353:
case 2822:
case 3910:
case 1142:
case 1124:
case 3779:
case 232:
case 293:
case 2510:
case 2553:
case 885:
case 1788:
case 725:
case 1928:
case 1338:
case 187:
case 3289:
case 3619:
case 2400:
case 1869:
case 2255:
case 3045:
case 1278:
case 1465:
case 3349:
case 2777:
case 355:
case 1031:
case 2420:
case 774:
case 1093:
case 971:
case 983:
case 811:
case 119:
case 2394:
case 2163:
case 165:
case 723:
case 911:
case 2375:
case 2591:
case 3110:
case 2642:
case 1988:
case 2218:
case 1942:
case 3631:
case 2207:
case 396:
case 238:
case 273:
case 1593:
case 3710:
case 224:
case 1531:
case 305:
case 256:
case 1161:
case 1334:
case 2624:
case 2848:
case 2579:
case 1784:
case 681:
case 2945:
case 2746:
case 2227:
case 564:
case 1315:
case 1826:
case 2604:
case 1885:
case 2236:
case 1108:
case 3545:
case 656:
case 3651:
case 3191:
case 3383:
case 303:
case 1551:
case 3791:
case 2441:
case 2977:
case 2963:
case 675:
case 529:
case 1295:
case 3670:
case 1857:
case 443:
case 669:
case 3046:
case 1570:
case 3871:
case 3715:
case 3647:
case 150:
case 3439:
case 422:
case 1267:
case 1273:
case 1547:
case 2457:
case 904:
case 1664:
case 1841:
case 701:
case 152:
case 2721:
case 3564:
case 804:
case 3244:
case 3938:
case 3328:
case 1211:
case 362:
case 3361:
case 1098:
case 748:
case 1640:
case 3001:
case 3855:
case 2572:
case 2426:
case 3297:
case 2437:
case 3972:
case 2015:
case 1783:
case 4059:
case 1333:
case 3021:
case 1012:
case 1183:
case 1290:
case 2034:
case 497:
case 949:
case 321:
case 742:
case 3490:
case 2534:
case 368:
case 1512:
case 2968:
case 3388:
case 2393:
case 3342:
case 3612:
case 158:
case 3282:
case 647:
case 1094:
case 3521:
case 1862:
case 2230:
case 384:
case 4090:
case 1601:
case 2901:
case 3827:
case 2515:
case 3116:
case 434:
case 93:
case 76:
case 83:
case 1497:
case 247:
case 2072:
case 3892:
case 786:
case 854:
case 4073:
case 2554:
case 3064:
case 59:
case 3676:
case 339:
case 3081:
case 45:
case 3954:
case 2405:
case 2250:
case 3040:
case 3698:
case 2809:
case 1460:
case 1103:
case 1047:
case 3772:
case 3467:
case 3473:
case 4011:
case 2370:
case 2829:
case 2486:
case 3172:
case 12:
case 100:
case 1149:
case 3856:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750831202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,];
var gg_b = "1750831202/";

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
